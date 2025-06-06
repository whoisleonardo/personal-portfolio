(function(){
    emailjs.init("JHSgBodSTPWtGvDFi"); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    emailjs.sendForm('service_vtl1ouf', 'template_9qg9csd', this)
        .then(function() {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('contact-form').reset();
        }, function(error) {
            alert('Falha ao enviar a mensagem: ' + JSON.stringify(error));
        });
});

// translate

document.addEventListener('DOMContentLoaded', function () {
    const flagButtons = document.querySelectorAll('.flag-button');

    const translations = {
        en: {
            title: 'Hello, I am Leonardo',
            digitando: 'I am ', engs: 'Software Engineer',
            description: 'I am a Software Engineering student at Universidade Positivo and a web developer with experience in freelance projects. I have knowledge of technologies such as HTML, CSS, JavaScript, C, Java, SQL, React and Angular, always focusing on delivering efficient and high-quality solutions. I have experience in both front-end and back-end development and am constantly seeking new challenges to enhance my skills.',
            heading: 'Projects',
            furiabot: 'Furia Chat Bot',
            chatfuria: 'FuriaBot is a Telegram bot developed in Java, created to provide information about the FURIA eSports team. It uses the Telegram API and structured data in a JSON file to respond to user commands quickly and interactively. With simple commands, the bot displays the team\'s next game, current lineup, last match result, titles won, social media links, and a link for more information. When starting the conversation with the /hello command, users receive buttons that facilitate navigation through available features. This project was an opportunity to apply my knowledge in Java, API integration, JSON file reading, and building a functional and direct user experience within Telegram. FuriaBot represents my ability to create useful and well-structured solutions aimed at specific audiences.',
            bloggamer: 'Gamer Blog',
            gamerb: 'A website aimed at gamers, offering detailed information about games, their soundtracks, and other related content. The platform features a responsive and easy-to-navigate design, allowing users to explore different sections such as Popular Games, Gameplay, Soundtracks, Wiki, and Store. Key features include intuitive sidebar navigation, embedded Spotify playlists for listening to game music, and the ability to recommend new games. The site was developed using technologies such as HTML5, CSS3, JavaScript, and integrates the Spotify API to include the soundtracks.',
            alcarro: 'Car Rental',
            carrental: 'RoyalDrive is a car rental website that provides an easy and intuitive experience for users to find the ideal vehicle for their needs. With a modern and responsive design, the site adapts seamlessly to various devices such as desktops, tablets, and smartphones. Users can search for cars based on location and rental dates, viewing a variety of options with images, prices, and detailed descriptions. Additionally, the site allows customers to read reviews from other users, helping them make more informed decisions. To keep users updated on deals and news, there is also a newsletter subscription option. Developed with technologies like HTML, CSS, JavaScript, Font Awesome, and Boxicons, RoyalDrive offers an efficient and attractive platform, ensuring a pleasant user experience on any device.',
            cont: 'Contact',
            copyright: '© Leonardo Miguel | All Rights Reserved'
        },
        br: {
            title: 'Olá, sou Leonardo',
            digitando: 'Sou um ', engs: 'Engenheiro de Software',
            description: 'Sou estudante de Engenharia de Software na Universidade Positivo e programador web com experiência em projetos freelance. Tenho conhecimento em tecnologias como HTML, CSS, JavaScript, C, Java, SQL, React e Angular, focando sempre em entregar soluções eficientes e de qualidade. Tenho experiência tanto no desenvolvimento front-end quanto back-end e estou sempre em busca de novos desafios para aprimorar minhas habilidades.',
            heading: 'Projetos',
            furiabot: 'Furia Chat Bot',
            chatfuria: 'O FuriaBot é um bot para o Telegram desenvolvido em Java, criado para fornecer informações sobre o time de eSports FURIA. Ele utiliza a API do Telegram e dados estruturados em um arquivo JSON para responder aos comandos dos usuários de forma rápida e interativa. Com comandos simples, o bot exibe o próximo jogo da equipe, o lineup atual, o resultado da última partida, títulos conquistados, redes sociais e um link com mais informações. Ao iniciar a conversa com o comando /ola, o usuário recebe botões que facilitam a navegação pelas funcionalidades disponíveis. Esse projeto foi uma oportunidade de aplicar meus conhecimentos em Java, integração com APIs, leitura de arquivos JSON e construção de uma experiência de usuário funcional e direta dentro do Telegram. O FuriaBot representa minha capacidade de criar soluções úteis e bem estruturadas voltadas a públicos específicos.',
            bloggamer: 'Blog Gamer',
            gamerb: 'Site voltado para gamers, oferecendo informações detalhadas sobre jogos, suas trilhas sonoras e outros conteúdos relacionados. A plataforma possui um design responsivo e fácil de navegar, permitindo aos usuários explorar diferentes seções, como Jogos Populares, Gameplay, Trilhas Sonoras, Wiki e Loja. As principais funcionalidades incluem uma navegação lateral intuitiva, playlists do Spotify incorporadas para ouvir músicas de jogos, e a possibilidade de recomendar novos jogos. O site foi desenvolvido com tecnologias como HTML5, CSS3, JavaScript, e utiliza a API do Spotify para integrar as trilhas sonoras.',
            alcarro: 'Aluguel de Carros',
            carrental: 'RoyalDrive é um site de aluguel de carros que oferece uma experiência fácil e intuitiva para os usuários encontrarem o veículo ideal para suas necessidades. Com um design moderno e responsivo, o site se adapta perfeitamente a diversos dispositivos, como desktops, tablets e smartphones. Os usuários podem pesquisar carros com base em localização e datas de aluguel, visualizando uma variedade de opções com imagens, preços e descrições detalhadas. Além disso, o site permite que os clientes leiam avaliações de outros usuários, ajudando a tomar decisões mais informadas. Para manter os usuários atualizados com ofertas e novidades, há também uma opção de inscrição na newsletter. Desenvolvido com tecnologias como HTML, CSS, JavaScript, Font Awesome e Boxicons, RoyalDrive oferece uma plataforma eficiente e atraente, garantindo uma experiência de usuário agradável em qualquer dispositivo.',
            cont: 'Contato',
            copyright: '© Leonardo Miguel | Todos Direitos Reservados'
        },
    };

    flagButtons.forEach(button => {
        button.addEventListener('click', function () {
            const selectedLanguage = button.getAttribute('data-language');
            const translation = translations[selectedLanguage];

            document.getElementById('title').textContent = translation.title;
            document.getElementById('digitando').textContent = translation.digitando;
            document.getElementById('engs').textContent = translation.engs;
            document.getElementById('description').textContent = translation.description;
            document.getElementById('heading').textContent = translation.heading;
            document.getElementById('furiabot').textContent = translation.furiabot;
            document.getElementById('chatfuria').textContent = translation.chatfuria;
            document.getElementById('bloggamer').textContent = translation.bloggamer;
            document.getElementById('gamerb').textContent = translation.gamerb;
            document.getElementById('alcarro').textContent = translation.alcarro;
            document.getElementById('carrental').textContent = translation.carrental;
            document.getElementById('cont').textContent = translation.cont;
            document.getElementById('copyright').textContent = translation.copyright;
        });
    });
});