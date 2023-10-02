import styled from 'styled-components';
import { memo } from 'react';

const EllipseInt = styled.div `
    position: fixed;
    z-index: -1;
    background: var(--color-component-main);
    filter: blur(60px);
    top: 0;
    left: 0;
    width: 150px;
    border-radius: 50%;
    height: 150px;
   animation: EllipseAnim 40s ease 0s infinite normal forwards;

@keyframes EllipseAnim {
	0% {
		top: 0;
        left: 0;
        width: 100px;
        height: 100px;
	}

	10% {
		top: 10vh;
        left: 18vh;
        width: 320px;
        height: 320px;
	}

	20% {
		top: 16vh;
        left: 22vh;
        width: 270px;
        height: 270px;
	}

    30% {
        top: 40vh;
        left: 58vh;
        width: 360px;
        height: 360px;
	}

    40% {
        top: 68vh;
        left: 80vh;
        width: 280px;
        height: 280px;
	}

    50% {
        top: 80vh;
        left: 44vh;
        width: 370px;
        height: 370px;
	}

    60% {
        top: 24vh;
        left: 90vh;
        width: 160px;
        height: 160px;
	}

    70% {
        top: 78vh;
        left: 34vh;
        width: 350px;
        height: 350px;
	}

    80% {
        top: 35vh;
        left: 10vh;
        width: 140px;
        height: 140px;
	}

    90% {
        top: 44vh;
        left: 67vh;
        width: 260px;
        height: 260px;
	}

    100% {
        top: 80vh;
        left: 19vh;
        width: 310px;
        height: 310px;
	}
}
`

const Ellipse =  memo(() => {
    return(
    <EllipseInt></EllipseInt>
    )
});

export default Ellipse;
Ellipse.displayName = 'Ellipse';