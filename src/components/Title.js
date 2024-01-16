import Titlestyle from "../styles/title.module.css";

const Title = () => {
  const path = process.env.PUBLIC_URL;
  return (
    <div className={Titlestyle.background}>
      <h2 className={Titlestyle.title}>
        안녕하세요, 저는 프론트엔드 신입 개발자 이현범입니다.
      </h2>
      <p className={Titlestyle.intro}>하고자 하면 하는 실패해도 다 겪어보는</p>
      <img
        src={`${path}/images/rock01.svg`}
        alt="사진"
        className={Titlestyle.imgone}
      />
      <img
        src={`${path}/images/rock02.svg`}
        alt="사진"
        className={Titlestyle.imgtwo}
      />
      <img
        src={`${path}/images/rock03.svg`}
        alt="사진"
        className={Titlestyle.imgthree}
      />
      <img
        src={`${path}/images/rock04.svg`}
        alt="사진"
        className={Titlestyle.imgfour}
      />
      <img
        src={`${path}/images/rock05.svg`}
        alt="사진"
        className={Titlestyle.imgfive}
      />
      <img
        src={`${path}/images/rock06.svg`}
        alt="사진"
        className={Titlestyle.imgsix}
      />
      <img
        src={`${path}/images/rock07.svg`}
        alt="사진"
        className={Titlestyle.imgseven}
      />
    </div>
  );
};

export default Title;
