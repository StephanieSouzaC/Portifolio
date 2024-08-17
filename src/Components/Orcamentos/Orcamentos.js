// import React, { useState } from 'react';
// import './Orcamento.css';
// import emailjs from '@emailjs/browser';
// import Modal from "react-modal";

// Modal.setAppElement("#root");

// const Orcamentos = () => {
//     const [nome, setNome] = useState('');
//     const [sobrenome, setSobrenome] = useState('');
//     const [email, setEmail] = useState('');
//     const [telefone, setTelefone] = useState('');
//     const [mensagem, setMensagem] = useState('');
//     const [modalIsOpen, setIsOpen] = useState(false);
//     const [modalMessage, setModalMessage] = useState('');
//     const idService = process.env.REACT_APP_ID_SERVICE;
//     const idTamplete = process.env.REACT_APP_ID_TEMPLATE;
//     const chavePublica = process.env.REACT_APP_CHAVE_PUBLICA;

//     function openModal(message) {
//         setModalMessage(message);
//         setIsOpen(true);
//     }

//     function closeModal() {
//         setIsOpen(false);
//     }

//     function sendEmail(e) {
//         e.preventDefault();

//         const templateParams = {
//             from_nome: nome,
//             from_sobrenome: sobrenome,
//             email: email,
//             telefone: telefone,
//             mensagem: mensagem,
//         }

//         emailjs.send(idService, idTamplete, templateParams, chavePublica)
//             .then((response) => {

//                 alert("Mensagem enviada com sucesso!", response)
//                 setNome('')
//                 setSobrenome('')
//                 setEmail('')
//                 setTelefone('')
//                 setMensagem('')
//             }, (err) => {
//                 alert("Erro ao enviar", err)
//             })
//     }

//     return (

//         <div className="orcamento__form-container" id='formOrcamento'>
//             <h2 className='orcamento__form-titulo'>Orçamento</h2>
//             <h3 className='orcamento__form-subtitulo'>Vamos Trabalhar Juntos?</h3>
//             <p className='orcamento__form-texto'>
//                 Estou sempre em busca de novos desafios e oportunidades para colaborar.
//                 Se você tem um projeto em mente, vamos tirá-lo do papel?
//             </p>
//             <p className='orcamento__form-texto'>Envie sua ideia por meio do formulário abaixo que entrarei em contato.</p>
//             <div className="orcamento__form-and-img">
//                 <div className='orcamento__form'>
//                     <form className='form' onSubmit={sendEmail}>
//                         <div className="orcamento__form-group">
//                             <div className="orcamento__form-campo">
//                                 <label className="orcamento__form-label">Nome</label>
//                                 <input
//                                     className="orcamento__form-input"
//                                     type="text"
//                                     name="nome"
//                                     placeholder="Digite seu nome"
//                                     onChange={(e) => setNome(e.target.value)}
//                                     value={nome}
//                                     required
//                                 />
//                             </div>
//                             <div className="orcamento__form-campo">
//                                 <label className="orcamento__form-label">Sobrenome</label>
//                                 <input
//                                     className="orcamento__form-input"
//                                     type="text" name="sobrenome"
//                                     placeholder="Digite seu sobrenome"
//                                     onChange={(e) => setSobrenome(e.target.value)}
//                                     value={sobrenome}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <div className="orcamento__form-group">
//                             <div className="orcamento__form-campo">
//                                 <label className="orcamento__form-label">Telefone</label>
//                                 <input
//                                     className="orcamento__form-input"
//                                     type="tel" name="telefone"
//                                     placeholder="Digite seu telefone"
//                                     onChange={(e) => setTelefone(e.target.value)}
//                                     value={telefone}
//                                     required
//                                 />
//                             </div>
//                             <div className="orcamento__form-campo">
//                                 <label className="orcamento__form-label">E-mail</label>
//                                 <input
//                                     className="orcamento__form-input"
//                                     type="email"
//                                     name="email"
//                                     placeholder="Digite seu e-mail"
//                                     onChange={(e) => setEmail(e.target.value)}
//                                     value={email}
//                                     required
//                                 />
//                             </div>
//                         </div>
//                         <label className="orcamento__form-label">Escreva aqui sua ideia!</label>
//                         <textarea
//                             className="orcamento__form-input"
//                             name="ideia"
//                             placeholder="Escreva aqui sua ideia!"
//                             onChange={(e) => setMensagem(e.target.value)}
//                             value={mensagem}
//                             required
//                         />
//                         <button className="orcamento__form-button" type="submit" onSubmit={openModal}>Enviar</button>
//                         <Modal
//                             isOpen={modalIsOpen}
//                             onRequestClose={closeModal}
//                             contentLabel='Mensagem enviada'
//                             overlayClassName="modal-overlay"
//                             className="modal-content"
//                         >
//                             <h3>{modalMessage}Sua mensagem foi enviada com sucesso!</h3>
//                             <button onClick={closeModal}>Fechar</button>
//                         </Modal>
//                     </form>
//                 </div>
//                 <div className="orcamento__form-img">
//                     <img src='/images/imgOrcamento.png'></img>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Orcamentos;


import React, { useState } from 'react';
import './Orcamento.css';
import emailjs from '@emailjs/browser';
import Modal from "react-modal";

Modal.setAppElement("#root");

const Orcamentos = () => {
    const [nome, setNome] = useState('');
    const [sobrenome, setSobrenome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');
    const [mensagem, setMensagem] = useState('');
    const [modalIsOpen, setIsOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const idService = process.env.REACT_APP_ID_SERVICE;
    const idTamplete = process.env.REACT_APP_ID_TEMPLATE;
    const chavePublica = process.env.REACT_APP_CHAVE_PUBLICA;

    function openModal(message) {
        setModalMessage(message);
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    function sendEmail(e) {
        e.preventDefault();

        const templateParams = {
            from_nome: nome,
            from_sobrenome: sobrenome,
            email: email,
            telefone: telefone,
            mensagem: mensagem,
        }

        emailjs.send(idService, idTamplete, templateParams, chavePublica)
            .then((response) => {
                openModal("Sua mensagem foi enviada com sucesso!");
                setNome('');
                setSobrenome('');
                setEmail('');
                setTelefone('');
                setMensagem('');
            }, (err) => {
                openModal("Erro ao enviar a mensagem. Por favor, tente novamente.");
            })
    }

    return (
        <div className="orcamento__form-container" id='formOrcamento'>
            <h2 className='orcamento__form-titulo'>Orçamento</h2>
            <h3 className='orcamento__form-subtitulo'>Vamos Trabalhar Juntos?</h3>
            <p className='orcamento__form-texto'>
                Estou sempre em busca de novos desafios e oportunidades para colaborar.
                Se você tem um projeto em mente, vamos tirá-lo do papel?
            </p>
            <p className='orcamento__form-texto'>Envie sua ideia por meio do formulário abaixo que entrarei em contato.</p>
            <div className="orcamento__form-and-img">
                <div className='orcamento__form'>
                    <form className='form' onSubmit={sendEmail}>
                        <div className="orcamento__form-group">
                            <div className="orcamento__form-campo">
                                <label className="orcamento__form-label">Nome</label>
                                <input
                                    className="orcamento__form-input"
                                    type="text"
                                    name="nome"
                                    placeholder="Digite seu nome"
                                    onChange={(e) => setNome(e.target.value)}
                                    value={nome}
                                    required
                                />
                            </div>
                            <div className="orcamento__form-campo">
                                <label className="orcamento__form-label">Sobrenome</label>
                                <input
                                    className="orcamento__form-input"
                                    type="text" name="sobrenome"
                                    placeholder="Digite seu sobrenome"
                                    onChange={(e) => setSobrenome(e.target.value)}
                                    value={sobrenome}
                                    required
                                />
                            </div>
                        </div>
                        <div className="orcamento__form-group">
                            <div className="orcamento__form-campo">
                                <label className="orcamento__form-label">Telefone</label>
                                <input
                                    className="orcamento__form-input"
                                    type="tel" name="telefone"
                                    placeholder="Digite seu telefone"
                                    onChange={(e) => setTelefone(e.target.value)}
                                    value={telefone}
                                    required
                                />
                            </div>
                            <div className="orcamento__form-campo">
                                <label className="orcamento__form-label">E-mail</label>
                                <input
                                    className="orcamento__form-input"
                                    type="email"
                                    name="email"
                                    placeholder="Digite seu e-mail"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email}
                                    required
                                />
                            </div>
                        </div>
                        <label className="orcamento__form-label">Escreva aqui sua ideia!</label>
                        <textarea
                            className="orcamento__form-input"
                            name="ideia"
                            placeholder="Escreva aqui sua ideia!"
                            onChange={(e) => setMensagem(e.target.value)}
                            value={mensagem}
                            required
                        />
                        <button className="orcamento__form-button" type="submit">Enviar</button>
                    </form>
                </div>
                <div className="orcamento__form-img">
                    <img src='/images/imgOrcamento.png' alt="Orçamento" />
                </div>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel='Mensagem enviada'
                overlayClassName="modal-overlay"
                className="modal-content"
            >
                <h3>{modalMessage}</h3>
                <button onClick={closeModal}>Fechar</button>
            </Modal>
        </div>
    )
}

export default Orcamentos;
