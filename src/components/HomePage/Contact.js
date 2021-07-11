import React, {useEffect, useState} from 'react';

import styled from 'styled-components';

const MainContainer = styled.div`
    width: 100%;
    margin-bottom: 70px;
    padding: 0 10px;

    .block {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;

        h3 {
            font-size: 40px;
            margin-bottom: 20px;
        }

        .block-buttons {
            button {
                color: #1F1F1F;
                border: 1px solid #1F1F1F;
                background-color: transparent;
                outline: none;
                padding: 5px 10px;
                margin: 15px;
                transition: 0.25s;
                font-size: 17px;
            }
            
            button:hover {
                cursor: pointer;
                opacity: 0.8;
            }

            .checked {
                background-color: #9C0189;
                color: #fff;
                border: none !important;
            }
        }
    }

    .block-inputs {
        form {
            display: flex;
            position: relative;
            padding-bottom: 80px;
            min-height: 200px;
            justify-content: space-around;
            

            input, textarea {
                width: 100%;
                border: 1px solid #1F1F1F;
                margin-bottom: 10px;
                padding: 5px 7px;
                outline: none;
            }

            textarea{
                height: 100%;
                resize: none;
            }

            input {
                height: 35px;
            }

            button {
                position: absolute;
                bottom: 15px;
                background-color: #9C0189;
                border: none;
                font-size: 17px;
                color: #fff;
                padding: 10px 50px;
                transition: 0.25s;
            }
            .column-1 {
                display: flex;
                flex-wrap: wrap;
                width: 30%;
            }

            .column-2 {
                width: 50%;
            }

            button:hover {
                opacity: 0.8;
                cursor: pointer;
            }
        }
    }
    @media (max-width: 768px) {
        .block{
            .block-buttons {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;

                button {
                    margin: 5px;
                    font-size: 17px;
                }
            }
        }

        form {
            flex-wrap: wrap; 
            padding: 0 20px;

            input, textarea {
                font-size: 20px;
            }
         }

        .column-1, .column-2 {
            width: 100% !important;
        } 
    }
    
`

const ShowingForm = ({type, setIsSent}) => {

    const [name, setName] = useState('');
    const [date, setDate] = useState(new Date());
    const [location_1, setLocation_1] = useState('');
    const [location_2, setLocation_2] = useState('');
    const [guests, setGuests] = useState(0);
    const [message, setMessage] = useState('');

    const sendAsk = (e) => {
        e.preventDefault();
        setName('');
        setDate(new Date());
        setLocation_1('');
        setLocation_2('');
        setGuests(0);
        setMessage('')

        // Show information about sent message
        setIsSent(true)
        console.log("Message sended")
    }

    const changeValue = (e) => {
        const value = e.target.value;
        const nameAttribute = e.target.name;
        switch (nameAttribute) {
            case "name":
                console.log("zmieniam imie " + value)
                setIsSent(false)
                setName(value)
                break;
            case "date":
                console.log("zmieniam date " + value)
                setDate(value)
                setIsSent(false)
                break;
            case "location_1":
                console.log("zmieniam lokalizacje 1 " + value )
                setLocation_1(value)
                setIsSent(false)
                break;
            case "location_2":
                console.log("zmieniam lokalizacje_2 " + value )
                setLocation_2(value)
                setIsSent(false)
                break;
            case "guests":
                console.log("zmieniam gości " + value )
                setGuests(value)
                setIsSent(false)
                break;
            case "message":
                console.log("zmieniam wiadomość " + value )
                setMessage(value)
                setIsSent(false)
                break;
        
            default:
                break;
        }
    }

    const inputsTab = [
        <input placeholder="imie i nazwisko" type="text" name="name" value={name} onChange={changeValue.bind(this)} required/>,
        <input type="date" name="date" value={date} onChange={changeValue.bind(this)} required/>,
        <input placeholder="Miejsce ślubu" type="text" name="location_1" value={location_1} onChange={changeValue.bind(this)} required/>,
        <input placeholder="miejsce zabawy weselnej" type="text" name="location_2" value={location_2} onChange={changeValue.bind(this)} required/>,
        <input placeholder="liczba gości" type="number" name="guests" value={guests} onChange={changeValue.bind(this)} required/>,
        <textarea placeholder="treść wiadomości" type="textarea" name="message" value={message} onChange={changeValue.bind(this)} required/>,
        <input placeholder="miejsce imprezy" type="text" name="location_1" value={location_1} onChange={changeValue.bind(this)} required/>,
    ]

    const weddingForm = (
        <> 
            {inputsTab[0]}
            {inputsTab[1]}
            {inputsTab[2]}
            {inputsTab[3]}
            {inputsTab[4]}
        </>
    )

    const clasicPartyForm = (
        <>
            {inputsTab[0]}
            {inputsTab[1]}
            {inputsTab[6]}
            {inputsTab[4]}
        </>
    )

    const otherForm = (
        <>
            {inputsTab[0]}
        </>
    )

    // Decision which form will be render
    const formToRender = type === "wedding" ? weddingForm : type === "party" ? clasicPartyForm : otherForm;

    return(
        <form onSubmit={sendAsk}>
            <div className="column-1">
                {formToRender}
            </div>
            <div className="column-2">
                {inputsTab[5]}
            </div>
            <button type="submit">Wyślij</button>
        </form>
    )
}
const Contact = () => {

    const [typeForm, setTypeForm] = useState("wedding");
    const [isSent, setIsSent] = useState(false)
    const buttons = [
        {
            id: 1,
            title: "Ślub/wesele",
            value: "wedding"
        },
        {
            id: 2,
            title: "Impreza okolicznościowa",
            value: "party"
        },
        {
            id: 3,
            title: "Inny temat",
            value: "other"
        }
    ]
    const message = "Twoja wiadomość została wysłana. Postaram się odpowiedzieć tak szybko jak to możliwe."


    const markButton = (id) => { 

        const buttons = document.querySelectorAll('.choseFormBtn');
        buttons.forEach(item => item.classList.remove('checked'))
        
        /*const chosedButton = document.getElementById(id);
        chosedButton.classList.add('checked')*/

        switch (typeForm) {
            case "wedding":
                buttons[0].classList.add('checked')
                break;
             case "party":
                buttons[1].classList.add('checked')
                break;
                case "other":
                buttons[2].classList.add('checked')
                break;
            default:
                break;
        }
    }
    useEffect(() => { markButton();} );

    const readyButtons = buttons.map(item => (
        <button className="choseFormBtn" key={item.id} id= {item.id} onClick={(e) => { setTypeForm(item.value) }} >{item.title}</button>
    ))
    console.log(typeForm)

    return ( 
        <MainContainer name="contact">
            <div className="block">
                <h3>Kontakt</h3>
                <div className="block-buttons">
                    {readyButtons}
                </div>
                <div className="block-inputs">
                    <ShowingForm type={typeForm} setIsSent={setIsSent}/>
                    {isSent ? message : null}
                </div>
            </div>
        </MainContainer>
     );
}
 
export default Contact;