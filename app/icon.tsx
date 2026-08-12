import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#aa151b",
          borderRadius: 8,
        }}
      >
        <div
          style={{
            display: "flex",
            color: "#f1bf00",
            fontSize: 20,
            fontWeight: 700,
            fontFamily: "Georgia, serif",
          }}
        >
          ¡H!
        </div>
      </div>
    ),
    { ...size }
  );
}
