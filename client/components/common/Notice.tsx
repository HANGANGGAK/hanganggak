import styled from "styled-components";

export const Notice = () => {
  return (
    <Container>
      <h3>๐จ๐จ ํ๊ฐ๊ณต์ ์ด์ฉ์์น ๐จ๐จ</h3>
      <ul>
        <li>์ง์ ๋ ๊ด์ฐฐ๋ก๋ง ์ด์ฉํ๊ธฐ</li>
        <li>์ ์๋๋ฌผ๊ณผ ๋๋ฐํ  ๋ ๋ชฉ์ค ๋งค๊ธฐ</li> <li>๋๋ฌผ ์ฑ์ทจํ์ง ์๊ธฐ</li>
        <li>๊ธ์ฐํ๊ธฐ</li> <li>์ทจ์ฌํ์ง ์๊ธฐ</li>{" "}
        <li>์ฐ๋ ๊ธฐ ๋๊ฐ์ ธ๊ฐ๊ธฐ(์๋ฐ ์ ๊ณผํ๋ฃ 10๋ง์)</li>
        <li>์์ ๊ฑฐ, ์ธ๋ผ์ธ ์ฒ์ฒํ ํ๊ธฐ</li>
        <li>์์ค๋ฌผ ๊นจ๋์ด ์ฌ์ฉํ๊ธฐ</li>
        <li>์คํ ๋ฐ์ด ํ๊ณ  ๋ค์ด์ค์ง ์๊ธฐ</li>
        <li>ํฐ ์๋ฆฌ๋ก ์๋ฆฌ์น๊ฑฐ๋ ์ด์ผ๊ธฐํ์ง ์๊ธฐ</li>
        <li>๊ทธ๋๋ง ์ด์ฉ ์ ์ค์น ํ์ฉ์ฅ์ ์ค์</li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    margin-bottom: 0;
  }
`;
