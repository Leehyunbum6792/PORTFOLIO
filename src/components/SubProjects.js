import substyle from "../styles/subproject.module.css";

const SubProjects = () => {
  return (
    <>
      <div className={substyle.flex}>
        {/* 개인 첫번쨰 */}
        <div>
          <p className={substyle.bg}></p>
          <ul className={substyle.list}>
            <li className={substyle.first}>01 개인프로젝트</li>
            <li className={substyle.second}>바닐라 JS로 앱 만들기</li>
            <li>바닐라 JS로 순수하게 앱을 만들어보았다. </li>
            <li className={substyle.button}>view more</li>
          </ul>
        </div>
        {/* 개인 두번째 */}
        <div>
          <p className={substyle.bg}></p>
          <ul className={substyle.list}>
            <li className={substyle.first}>01 개인프로젝트</li>
            <li className={substyle.second}>바닐라 JS로 앱 만들기</li>
            <li>바닐라 JS로 순수하게 앱을 만들어보았다. </li>
            <li className={substyle.button}>view more</li>
          </ul>
        </div>
        <p style={{ position: "fixed", right: 0, backgroundColor: "black" }}>
          위로
        </p>
      </div>
    </>
  );
};

export default SubProjects;
