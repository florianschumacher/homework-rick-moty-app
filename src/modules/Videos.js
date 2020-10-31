import styled from "styled-components/macro";

export default function Video() {
  return (
    <VideoContainer>
      <div>
        <iframe
          width="340"
          height="auto"
          src="https://www.youtube.com/embed/mb-XCaA2HZs"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>{" "}
      </div>
    </VideoContainer>
  );
}

const VideoContainer = styled.div`
  display: block;
  width: 100%;
  background-color: yellow;
  text-align: center;
  font-size: 80%;
  margin: 0;
  padding-top: 12px;
  padding-bottom: 10px;
  border: 1px solid gray;
  border-radius: 10px;
  margin-bottom: 120px;
`;
