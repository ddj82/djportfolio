import React from "react";

const About = () => {
    return (
        <section id="about" className="scroll-mt-20 py-28 bg-gray-900 px-6">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-semibold text-blue-400 mb-6">About Me</h2>
                <p className="text-gray-300 leading-relaxed text-base">
                    안녕하세요, <strong>김동준</strong>입니다.<br />
                    저는 ‘개발은 결국 사람을 위한 일’이라는 마음으로, 기술 너머의 가치를 고민하는 개발자입니다.<br /><br />
                    React와 Spring Boot를 중심으로 사용자 친화적인 웹 서비스를 만들고 있으며,<br />
                    스타트업에서의 빠른 사이클 속에서 기획부터 배포까지 직접 경험했습니다.<br /><br />
                    기술은 계속 바뀌지만, <strong>문제를 끝까지 붙잡고 해결하는 자세</strong>는 변하지 않는다고 믿습니다.<br /><br />
                    화려하진 않아도 진심은 담겼습니다. 천천히, 편하게 둘러보세요 :)
                </p>

            </div>
        </section>
    );
};

export default About;
