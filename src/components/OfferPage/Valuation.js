import React, {useState} from 'react';

import styled from 'styled-components';




const MainContainer = styled.div`
    background-color: #fff;
    width: 100%;
    min-height: 300px;
    max-width: 1400px;
    //border: 1px solid red;
    margin: 0 auto;
    padding: 0px 10px 70px 10px;
    overflow: auto;
    color: #181818;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    h5 {
        font-size: 28px;
        font-weight: 300;
    }
`;

const AskContainer = styled.div`
    width: 30%;
    transition: 0.25s;
    opacity: ${({ animation }) => (animation ? "1" : "0")};

    h4 {
        font-size: 18px;
    }

    .option{
        padding: 5px;
        margin-top: 5px;
        font-size: 20px;
        transition: .15s;
        position: relative;

        :hover {
            cursor: pointer;
            color: #9C0189;

            ::before {
                opacity: 1;
            }
        }

        ::before {
            content: "";
            position: absolute;
            background-color: #9c0189;
            width: 2px;
            height: 80%;
            transform: translateX(-5px);
            opacity: 0;
            transition: .25s;
        }

    }

    button {
        background-color: #9c0189;
        border: none;
        outline: none;
        font-size: 18px;
        float: right;
        margin: 10px;
        padding: 5px 7px;
        color: #fff;

        :hover {
            cursor: pointer;
        }
    }

    @media (max-width: 768px) {
        width: 100%;
        min-height: 0px;
    }
`
const Progress = styled.div`
    width: 40%;
    display: flex;
    position: relative;
    margin-left: 10px;
    
    .parent {
        width: 100%;
        height: 30px;
        border: 1px solid #9C0189;
        position: absolute;
        z-index: 0;
        top: 60px;
    }

    .child {
        width: ${({valueWidth}) => valueWidth}%;
        height: 100%;
        background-color: #9C0189;
        transition: 1s;
    }

    span{
        position: absolute;
        font-size: 30px;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin-bottom: 120px;
        margin-left: 0px;
    }
`

const EndFormContainer = styled.div`
    width: 30%;
    min-height: 300px;
    transition: .25s;
    opacity: ${({ animation }) => (animation ? "1" : "0")};

    @media (max-width: 768px) {
        width: 100%;
        min-height: 0px;
    }
`

const Questionnaire = ({number, handleQuestion, animation}) => {

    const titles = ['Wybierz opcję', 'Wybierz liczbę gości', 'Wybierz rodzaj filmu']
    const ask1 = [
        {
            title: 'Wesele (kościół)',
            price: 500
        },
        {
            title: 'Wesele (zabawa weselna)',
            price: 800
        },
        {
            title: 'Wesele (całość)',
            price: 1500
        },
        {
            title: 'Impreza okolicznościowa',
            price: 500
        },
    ]
    const ask2 = [
        {
            title: 'do 50 osób',
            price: 200
        },
        {
            title: '51-70',
            price: 400
        },
        {
            title: '70-100',
            price: 550
        },
    ]
    const ask3 = [
        {
            title: '3-5 min',
            price: 500
        },
        {
            title: '5-10 min',
            price: 700
        },
        {
            title: '15-20 min',
            price: 1000
        },
        {
            title: '60 min',
            price: 1000
        },
        {
            title: '90-120 min',
            price: 1500
        },
        

    ]

    const list = [ask1, ask2, ask3];

    const renderQuestions = list[number].map(item => (
        <div key={item.title}>
            <p className="option" onClick={handleQuestion.bind(this, 'next', item)}>{item.title}</p>
        </div>
    ))

    return(
        <AskContainer animation={animation}>  
            <h5>{titles[number]}</h5>
            {renderQuestions}
            <button onClick={handleQuestion.bind(this, 'reset')}>Resetuj</button>
        </AskContainer>
    )
}
    
  
const ProgressBar = ({valueWidth, price}) => {
    return (
        <Progress valueWidth={valueWidth}>
            <span>{price} zł</span>
            <div className="parent">
                <div className="child"></div>
            </div>
        </Progress>
    )
}

const EndForm = ({price, animation}) => {
    return(
        <EndFormContainer animation={animation}>
            <h4>Przewidywana cena wynosi {price} zł</h4>
            <p>Pamiętaj, aby uzyskać szczegółową wycenę wyślij zapytanie korzystając z formularza</p>
        </EndFormContainer>
    )
}

const Valuation = () => {
    const [questionNumber, setQuestionNumber] = useState(0);
    const [price, setPrice] = useState(0);
    const [end, setEnd] = useState(false); // Czy formularz wypełniony
    const [animationValue, setAnimationValue] = useState(true); // Do obsługi widoczności pola formularza

    // Obsluga zmiany pytania formularza i wyceny
    const handleQuestion = (decision, item) => {
        if(end === false) { setPrice(price + item.price)}
        if(decision === 'next'){         
            questionNumber < 2 ? setQuestionNumber(questionNumber+1) : setEnd(true);
        }
        else if(decision === 'reset') { 
            setQuestionNumber(0);
            setPrice(0);
        }
    }

    // Obsługa animacji przejścia przy przechodzeniu do kolejnego pytania
    const handleQuestionare = (decision, item) => {
        setAnimationValue(false);
        setTimeout(() => {
            handleQuestion(decision, item)
            setAnimationValue(true)
        }, 300)
    }

    // Obsłużenie płynnego pokazania ceny końcowej
    const [priceShow, setPriceShow] = useState(false)
    if(end){
        setTimeout(() => {
            setPriceShow(true)
        }, 100)
    }

    // Obliczanie szerokości paska postępu
    const barWidth = end ? 100 : (100/3)*questionNumber;


    return ( 
        <MainContainer>
           {end ? <EndForm price={price} animation={priceShow}/> : <Questionnaire number={questionNumber} handleQuestion={handleQuestionare} animation={animationValue}/>}
            <ProgressBar valueWidth={barWidth} price={price}/>
        </MainContainer>
     );
}
 
export default Valuation;