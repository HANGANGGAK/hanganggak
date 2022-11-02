import styled from "styled-components";

export const Notice = () => {
  return (
    <Container>
      <h3>🚨🚨 한강공원 이용수칙 🚨🚨</h3>
      <ul>
        <li>지정된 관찰로만 이용하기</li>
        <li>애완동물과 동반할 때 목줄 매기</li> <li>나물 채취하지 않기</li>
        <li>금연하기</li> <li>취사하지 않기</li>{" "}
        <li>쓰레기 되가져가기(위반 시 과태료 10만원)</li>
        <li>자전거, 인라인 천천히 타기</li>
        <li>시설물 깨끗이 사용하기</li>
        <li>오토바이 타고 들어오지 않기</li>
        <li>큰 소리로 소리치거나 이야기하지 않기</li>
        <li>그늘막 이용 시 설치 허용장소 준수</li>
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
