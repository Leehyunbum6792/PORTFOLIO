import skillsstyle from "../styles/skills.module.css";

const Skills = () => {
  return (
    <div id="2">
      <h2 className={skillsstyle.skills}>Skills</h2>
      <div>
        <div>
          {/* html css */}
          <div className={skillsstyle.grid}>
            <h3
              className={` ${skillsstyle.frontend} ${skillsstyle.textIndent}`}>
              Frontend
            </h3>

            <h4 className={skillsstyle.borderRed}>Html5 & Css3</h4>
            <div>
              <ul className={skillsstyle.mrpd}>
                <li className={skillsstyle.mobileLi}>css관련된</li>
                <li className={skillsstyle.mobileLi}>
                  웹 접근성을 고려한 시멘틱 태그
                </li>
                <li className={skillsstyle.mobileLi}>
                  Flex, Grid, Position을 이용한 레이아웃 구현
                </li>
                <li className={skillsstyle.mobileLi}>
                  미디어 쿼리를 이용한 반응형 웹 제작
                </li>
                <li
                  className={`${skillsstyle.borderbottomLine} ${skillsstyle.mobileLi}`}>
                  CSS Animation을 활용한 모션 구현
                </li>
              </ul>
            </div>
          </div>
          {/* js */}
          <div className={`${skillsstyle.grid} ${skillsstyle.marginTop}`}>
            <h4
              className={`${skillsstyle.borderYellow} ${skillsstyle.gridColmun}`}>
              Javascript
            </h4>
            <div>
              <ul className={skillsstyle.mrpd}>
                <li>자바스크립트 이벤트로 디자인 할수 있다는거 </li>
                <li>자바스크립트 ES6+ 문법 이해</li>
                <li>DOM 조작 및 제어 </li>
                <li>이벤트 매서드 사용</li>
                <li>async, await, promise 함수를 활용한 비동기 실행</li>
                <li className={skillsstyle.borderbottomLine}>
                  로컬 스토리지를(local Storge) 를 이용하여 클라이언트에 저장 및
                  활용
                </li>
              </ul>
            </div>
          </div>

          <div className={`${skillsstyle.grid} ${skillsstyle.marginTop}`}>
            <h4
              className={`${skillsstyle.borderBlue} ${skillsstyle.gridColmun}`}>
              React
            </h4>
            <div>
              <ul className={skillsstyle.mrpd}>
                <li>redux</li>
                <li>함수형 컴포넌트 이용</li>
                <li>
                  함수 스타일로 컴포넌트 작성하고 props를 사용하여 데이터 전달
                </li>
                <li>useState 상태관리, useEffect 함수업데이트 활용</li>
                <li>Router 이해와 활용</li>
                <li className={skillsstyle.borderbottomLine}>
                  Axios를 활용한 외부 데이터 로딩
                </li>
              </ul>
            </div>
          </div>

          <div className={`${skillsstyle.grid} ${skillsstyle.marginTop}`}>
            <h3 className={`${skillsstyle.frontend} ${skillsstyle.textIndent}`}>
              Backend
            </h3>

            <h4 className={skillsstyle.borderGreen}>Node.js</h4>
            <div>
              <ul className={skillsstyle.mrpd}>
                <li>express.js로 쉽고 빠르게 간단하게 웹 서버 구축</li>
                <li className={skillsstyle.borderbottomLine}>
                  간단한 로그인, 회원가입 구현{" "}
                </li>
              </ul>
            </div>
          </div>

          <div className={`${skillsstyle.grid} ${skillsstyle.marginTop}`}>
            <h4
              className={`${skillsstyle.borderDdong} ${skillsstyle.gridColmun}`}>
              MongoDB
            </h4>
            <div>
              <ul className={skillsstyle.mrpd}>
                <li className={skillsstyle.borderbottomLine}>
                  데이터 베이스 생성 및 상태관리
                </li>
              </ul>
            </div>
          </div>

          <div className={`${skillsstyle.grid} ${skillsstyle.marginTop}`}>
            <h3 className={`${skillsstyle.frontend} ${skillsstyle.textIndent}`}>
              Tool
            </h3>

            <h4 className={skillsstyle.borderWhite}>Github</h4>
            <div>
              <ul className={skillsstyle.mrpd}>
                <li>GitHub Organizations를 통해 팀 프로젝트 협업</li>
                <li>GitHub 프로젝트 관리</li>
                <li className={skillsstyle.borderbottomLine}>
                  Git Bash로 git 파일 백업 및 버전 관리
                </li>
              </ul>
            </div>
          </div>

          <div className={`${skillsstyle.grid} ${skillsstyle.marginTop}`}>
            <h4
              className={`${skillsstyle.borderPurple} ${skillsstyle.gridColmun}`}>
              Figma
            </h4>
            <div>
              <ul className={skillsstyle.mrpd}>
                <li className={skillsstyle.borderbottomLine}>
                  Figma를 이용한 UI / UX 프로토타입 제작
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
