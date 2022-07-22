import { S3Client, GetObjectCommand } from "@aws-sdk/client-s3";

const {
  REACT_APP_ACCESS_KEY_ID = "",
  REACT_APP_SECRET_ACCESS_KEY = "",
  REACT_APP_REGION = "",
  REACT_APP_BUCKET = "",
  REACT_APP_S3_KEY = "",
} = process.env;

const clientSecrets = {
  credentials: {
    accessKeyId: REACT_APP_ACCESS_KEY_ID,
    secretAccessKey: REACT_APP_SECRET_ACCESS_KEY,
  },
  region: REACT_APP_REGION,
};

const paramsSecrets = {
  region: REACT_APP_REGION,
  Bucket: REACT_APP_BUCKET,
  Key: REACT_APP_S3_KEY,
};

export const createAudio = async (url: string) => {
  const response = await fetch(`/audio`, {
    method: "POST",
    body: JSON.stringify({ url }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  const buffer = await response.arrayBuffer();
  const context = new window.AudioContext();
  const source = context.createBufferSource();
  source.buffer = await new Promise((res) =>
    context.decodeAudioData(buffer, res)
  );
  source.loop = true;

  source.start(0);
  const gain = context.createGain();
  const analyser = context.createAnalyser();

  // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/fftSize
  analyser.fftSize = 128;
  source.connect(analyser);
  analyser.connect(gain);
  const data = new Uint8Array(analyser.frequencyBinCount);
  return {
    context,
    source,
    gain,
    data,
    update: () => {
      analyser.getByteFrequencyData(data);
    },
  };
};

export const fetchDefaultSong = async () => {
  const client = new S3Client(clientSecrets);
  const res = await client.send(new GetObjectCommand(paramsSecrets));

  const stringified: { url: string } = await new Response(
    res.Body as BodyInit,
    {}
  ).json();

  return stringified.url;
};
