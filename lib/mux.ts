import Mux from "@mux/mux-node";

// Only initialize Mux if tokens are provided
const muxClient = process.env.MUX_TOKEN_ID && process.env.MUX_TOKEN_SECRET
  ? new Mux(process.env.MUX_TOKEN_ID, process.env.MUX_TOKEN_SECRET)
  : null;

export const Video = muxClient?.Video ?? null;

export const isMuxConfigured = () => {
  return !!Video;
};
