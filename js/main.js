const questions = [
    {
        question: "Para um sistema de automação residencial, o padrão Abstract Factory é usado para criar diferentes tipos de dispositivos inteligentes, como lâmpadas e termostatos, sem depender de implementações específicas. Isso permite a fácil integração de novos dispositivos no sistema. Qual é a principal funcionalidade do padrão Abstract Factory neste sistema de automação?",
        options: [
            "Cria famílias de objetos sem especificar suas classes concretas.",
            "Permite a criação de uma única instância de dispositivo.",
            "Define uma interface para criar objetos individuais.",
            "Gerencia o ciclo de vida dos dispositivos conectados."
        ],
        correct: 0
    },
    {
        question: "Sobre o padrão Factory Method, assinale a alternativa correta:",
        options: [
            "Seu propósito é permitir a criação de uma fábrica por meio da cópia de um objeto existente.",
            "Sua implementação envolve a aplicação do conceito de polimorfismo.",
            "É usado exclusivamente para criar objetos singleton.",
            "Não permite a extensão de tipos de objetos criados."
        ],
        correct: 1
    },
    {
        question: "Possibilitar a manipulação de objetos individuais e de agregados de uma estrutura hierárquica (árvore) de objetos por meio do mesmo conjunto de operações, sem que o módulo cliente precise fazer a distinção entre o tipo do objeto manipulado (individual ou agregado). Assinale a alternativa com o nome do padrão que possui esse propósito:",
        options: [
            "Strategy",
            "Observer",
            "Composite",
            "Decorator"
        ],
        correct: 2
    },
    {
        question: "Você está desenvolvendo um sistema que precisa se integrar com diferentes sistemas de despacho de produtos fornecidos por terceiros. Seu objetivo é isolar os módulos clientes das implementações específicas fornecidas pelos terceiros. Para isso, você define uma interface genérica do serviço de despacho que abstrai essas diferentes implementações, e cria pequenos módulos que traduzem essa interface genérica nas chamadas específicas requeridas pela interface de cada sistema disponibilizado pelos terceiros. Assinale a alternativa com o nome do padrão que corresponde a essa estratégia de solução:",
        options: [
            "Bridge",
            "Proxy",
            "Facade",
            "Adapter"
        ],
        correct: 3
    },
    {
        question: "Sobre o padrão Strategy, assinale a alternativa correta:",
        options: [
            "Define uma família de algoritmos encapsulados em objetos, permitindo que possamos trocar o algoritmo específico sem afetar o módulo usuário desse algoritmo.",
            "Cria uma cadeia de objetos para processar requisições.",
            "Permite a criação de objetos complexos passo a passo.",
            "Define uma interface para observar mudanças de estado."
        ],
        correct: 0
    },
    {
        question: "Esse padrão implementa uma lista encadeada de objetos, em que cada objeto pode realizar o processamento de uma requisição ou repassá-la para o próximo objeto da sequência, de forma similar à dinâmica de tratamento de exceções no Java.",
        options: [
            "Command",
            "Chain of Responsibility",
            "Observer",
            "Mediator"
        ],
        correct: 1
    },
    {
        question: "Em um sistema de informação, o desenvolvedor decide colocar em um módulo X todas as operações necessárias para a execução de um caso de uso. Esse módulo não distribui a responsabilidade com outras classes do sistema. Ele apenas utiliza classes de domínio e suas operações get/set para obter ou modificar dados presentes em objetos dessas classes. O resultado é um módulo conhecido como 'God Class', ou seja, uma classe com muitas operações, com milhares de linhas de código. Que tipo de programação isso caracteriza?",
        options: [
            "Procedural",
            "Orientada a objetos",
            "Funcional",
            "Estruturada"
        ],
        correct: 0
    },
    {
        question: "Padrões arquiteturais definem os componentes estruturais de um sistema, e a forma de comunicação entre eles ou com outros sistemas, organizando as regras gerais para a concepção de aplicativos com algum perfil funcional específico. Plataformas de objetos distribuídos, como o CORBA, trabalham em um padrão arquitetural denominado:",
        options: [
            "MVC",
            "Broker",
            "Layered",
            "Pipe and Filter"
        ],
        correct: 1
    },
    {
        question: "Mesmo que as novas tecnologias adotem anotações, no lugar de arquivos XML, para efetuar diversas configurações, ainda temos a necessidade de utilizar um arquivo nesse formato, no ambiente do JPA, com a responsabilidade de definir parâmetros globais e a conexão com o banco de dados. Qual o nome do arquivo?",
        options: [
            "web.xml",
            "application.xml",
            "persistence.xml",
            "config.xml"
        ],
        correct: 2
    },
    {
        question: "Assinale a alternativa com a afirmação CORRETA sobre o padrão Controlador.",
        options: [
            "O módulo Controlador é responsável apenas pela apresentação dos dados.",
            "O módulo Controlador coordena e controla os módulos responsáveis pela produção da resposta a eventos lógicos de sistema gerados pela camada de interface com o usuário.",
            "O módulo Controlador armazena os dados da aplicação.",
            "O módulo Controlador é opcional na arquitetura MVC."
        ],
        correct: 1
    },
    {
        question: "Em um sistema de vendas online, o padrão Abstract Factory é utilizado para criar objetos relacionados a diferentes categorias de produtos sem especificar suas classes concretas. Isso permite flexibilidade na adição de novas categorias de produtos. Qual é o principal objetivo deste padrão?",
        options: [
            "Criar uma família de objetos relacionados sem especificar suas classes concretas.",
            "Garantir que apenas uma instância seja criada.",
            "Permitir a modificação de objetos existentes.",
            "Definir uma interface comum para todos os produtos."
        ],
        correct: 0
    },
    {
        question: "Em um projeto de software para gestão de bibliotecas, o padrão Singleton é utilizado para garantir uma única instância do sistema de gerenciamento de usuários. Este padrão assegura que todas as operações de empréstimo e devolução de livros sejam gerenciadas de forma centralizada. Qual é a principal característica do padrão Singleton?",
        options: [
            "Permite múltiplas instâncias controladas.",
            "Garante uma única instância de uma classe em toda a aplicação.",
            "Cria objetos em lote para otimização.",
            "Define uma hierarquia de classes relacionadas."
        ],
        correct: 1
    },
    {
        question: "Identifique o padrão que está sendo utilizado quando você tem uma estrutura que permite adicionar funcionalidades a um objeto dinamicamente, envolvendo-o em outros objetos que implementam a mesma interface:",
        options: [
            "Adapter",
            "Facade",
            "Decorator",
            "Proxy"
        ],
        correct: 2
    },
    {
        question: "Um colega seu de trabalho está implementando a interface com o usuário de um sistema que dispara a execução de uma lógica de negócio envolvendo vários objetos. Ele implementa uma primeira versão que faz diversas chamadas a objetos da lógica de negócio porque não existe uma interface de mais alto nível disponível que encapsule esta complexidade. Para piorar, ao implementar um segundo módulo de interface com o usuário, ele se depara com o mesmo problema, tendo que copiar e colar partes da lógica utilizadas no primeiro módulo de interface com o usuário. Ao revisar o código feito pelo seu colega, qual padrão você recomendaria que ele utilizasse para diminuir o acoplamento entre os módulos de interface com o usuário e módulos referentes à lógica de negócio?",
        options: [
            "Singleton",
            "Observer",
            "Command",
            "Facade"
        ],
        correct: 3
    },
    {
        question: "Sobre o padrão Abstract Factory, assinale a alternativa correta:",
        options: [
            "Sua implementação pode envolver a aplicação do padrão Factory Method.",
            "É usado apenas para criar objetos simples.",
            "Não permite a criação de famílias de objetos.",
            "É equivalente ao padrão Singleton."
        ],
        correct: 0
    },
    {
        question: "Os iteradores de coleção em Java obtidos a partir da interface Collection são implementados com a aplicação de qual padrão de projeto?",
        options: [
            "Singleton",
            "Factory Method",
            "Observer",
            "Strategy"
        ],
        correct: 1
    },
    {
        question: "Analise a estratégia de solução a seguir: 'Definir um construtor private e implementar uma operação estática que retorna uma instância criada em uma operação com escopo static e armazenada como um atributo static dentro da própria classe'. Assinale a alternativa com o nome do padrão que define essa estratégia:",
        options: [
            "Factory Method",
            "Singleton",
            "Builder",
            "Prototype"
        ],
        correct: 1
    },
    {
        question: "Fornecer uma interface de alto nível para os módulos clientes acessarem um componente ou subsistema, desacoplando os módulos clientes da estrutura interna do subsistema e reduzindo o número de elementos com os quais os módulos clientes precisam interagir para realizar um serviço. Assinale a alternativa com o nome do padrão que possui esse propósito:",
        options: [
            "Adapter",
            "Proxy",
            "Facade",
            "Bridge"
        ],
        correct: 2
    },
    {
        question: "Assinale o padrão que utiliza uma fábrica de objetos de modo a gerenciar a instanciação e o compartilhamento de objetos imutáveis utilizados em larga escala em um sistema:",
        options: [
            "Singleton",
            "Factory Method",
            "Flyweight",
            "Prototype"
        ],
        correct: 2
    },
    {
        question: "Sobre o padrão Facade, assinale a alternativa correta:",
        options: [
            "Com a aplicação do padrão Facade, os módulos clientes podem utilizar um componente ou subsistema por meio de uma interface de alto nível.",
            "O padrão Facade é usado para criar objetos complexos.",
            "Facade é equivalente ao padrão Adapter.",
            "O padrão Facade não reduz o acoplamento."
        ],
        correct: 0
    },
    {
        question: "Esse padrão encapsula uma requisição em um objeto, desacoplando o requisitante e o objeto executor. Esse encapsulamento permite registrar o histórico de requisições, reproduzir essas requisições em outro ambiente, bem como implementar operações de desfazer ou refazer o processamento associado à requisição. Assinale a alternativa com o nome do padrão que possui esse propósito:",
        options: [
            "Strategy",
            "Observer",
            "Command",
            "State"
        ],
        correct: 2
    },
    {
        question: "Você está implementando um sistema e quer guardar o histórico de todas as requisições efetuadas pelo usuário via interface gráfica, de forma a poder realizar operações, como desfazer (undo) e refazer (redo) requisições. Assinale a alternativa com o nome do padrão mais indicado para ser aplicado nesse contexto:",
        options: [
            "Memento",
            "Command",
            "Observer",
            "Strategy"
        ],
        correct: 1
    },
    {
        question: "Você está desenvolvendo um sistema para acompanhar as cotações da bolsa de valores. As cotações podem ser acompanhadas na interface com usuário na forma textual (ticker da ação e o seu valor) e na forma de um gráfico de candlesticks, apresentando o histórico das cotações em um período do tempo. As duas formas de visualização devem estar em sincronia com as variações que ocorrem com o valor da cotação das ações. Assinale a alternativa com o nome do padrão que pode ser aplicado para resolver esse problema de sincronização de visualizações de um conjunto de informações com a sua fonte.",
        options: [
            "Strategy",
            "Command",
            "Observer",
            "Mediator"
        ],
        correct: 2
    },
    {
        question: "Na implementação de um processo complexo, um módulo A chama operações de um módulo B e de um módulo C. B, por sua vez, chama operações de C e de D. O módulo C chama operações de A e de E. O módulo D chama operações dos módulos B e C. Esse cenário ilustra uma interação entre objetos no estilo muitos para muitos. Para simplificar esse processo, define-se um objeto que centraliza todas as interações entre esses objetos, de modo que eles passam a se comunicar apenas com esse elemento central. Essa descrição corresponde à estrutura de solução de qual padrão?",
        options: [
            "Observer",
            "Command",
            "Mediator",
            "Chain of Responsibility"
        ],
        correct: 2
    },
    {
        question: "Um módulo A contém operações como conversão de medidas, formatação de valores monetários, remoção de espaços duplicados em strings e envio/recepção de arquivos FTP. O módulo A possui coesão:",
        options: [
            "Funcional",
            "Sequencial",
            "Temporal",
            "Coincidente"
        ],
        correct: 3
    },
    {
        question: "Assinale a alternativa que contém tipos de coesão de um módulo em ordem do tipo de coesão mais baixa para a mais alta:",
        options: [
            "Funcional - Sequencial - Temporal",
            "Coincidente - Temporal - Sequencial",
            "Temporal - Coincidente - Funcional",
            "Sequencial - Funcional - Coincidente"
        ],
        correct: 1
    },
    {
        question: "Assinale a alternativa que descreve uma situação em que a utilização do padrão Especialista de Informação pode comprometer a coesão de um módulo.",
        options: [
            "Quando separamos as responsabilidades em classes diferentes.",
            "Quando colocamos em uma mesma classe operações de naturezas diferentes como lógica do negócio e acesso a banco de dados, uma vez que eles utilizam as mesmas informações da classe.",
            "Quando aplicamos o princípio da responsabilidade única.",
            "Quando utilizamos interfaces para definir contratos."
        ],
        correct: 1
    },
    {
        question: "Uma mudança essencial no modelo de programação Java, com a evolução do JEE, foi o uso de anotações nas diversas tarefas de configuração dos EJBs do aplicativo. Para que serve a anotação @Local no ambiente de criação de EJBs?",
        options: [
            "Definir a interface de acesso remoto ao pool de EJBs.",
            "Definir a interface de acesso local ao pool de EJBs.",
            "Configurar o pool de conexões do banco de dados.",
            "Definir o escopo de transação do EJB."
        ],
        correct: 1
    },
    {
        question: "A arquitetura MVC (Model, View e Controller) é utilizada de forma ampla, na criação de sistemas cadastrais, e caracteriza-se pela divisão do sistema em três camadas, com objetivos específicos. Considerando a divisão utilizada pelo MVC, a interface de usuário e o componente DAO estariam, respectivamente, nas camadas:",
        options: [
            "Controller e Model",
            "View e Controller",
            "View e Model",
            "Model e View"
        ],
        correct: 2
    },
    {
        question: "Ao trabalhar com um aplicativo corporativo, segundo a arquitetura MVC, ocorre uma divisão natural das camadas, em termos dos projetos internos, ficando a camada View sob responsabilidade do projeto com terminador 'war'. A interface padrão, conforme o próprio terminador indica, é um aplicativo Java Web, sendo comum a implementação de um padrão de desenvolvimento para centralizar o tratamento das requisições, bem como redirecionar para a visualização correta, após efetuar as chamadas para a camada Controller. De qual padrão estamos falando, e qual o componente deve implementá-lo?",
        options: [
            "Front Controller e Servlet",
            "JPA e EJB",
            "DAO e Entity",
            "Observer e Controller"
        ],
        correct: 0
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];
let questionAttempts = [];
let totalAttempts = 0;
let score = 0;
let currentAttempt = 0;
let selectedOption = null;
let isAnswered = false;

function initQuiz() {
    currentQuestionIndex = 0;
    userAnswers = [];
    questionAttempts = [];
    totalAttempts = 0;
    score = 0;
    currentAttempt = 0;
    selectedOption = null;
    isAnswered = false;

    document.getElementById('totalQuestions').textContent = questions.length;

    // Inicializar array de tentativas para cada pergunta
    for (let i = 0; i < questions.length; i++) {
        questionAttempts.push(0);
    }

    showQuestion();
    updateProgress();
    updateNavigationButtons();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('currentQuestion').textContent = currentQuestionIndex + 1;
    document.getElementById('questionTitle').textContent = question.question;

    // Atualizar contador de tentativas
    currentAttempt = questionAttempts[currentQuestionIndex];
    document.getElementById('attemptCount').textContent = currentAttempt;

    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';

    // Resetar estado da pergunta se ainda não foi respondida
    if (userAnswers[currentQuestionIndex] === undefined) {
        selectedOption = null;
        isAnswered = false;
        hideFeedback();
    } else {
        // Pergunta já foi respondida corretamente
        isAnswered = true;
        selectedOption = userAnswers[currentQuestionIndex];
    }

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.onclick = () => selectOption(index);

        // Se a pergunta já foi respondida corretamente, mostrar o estado final
        if (isAnswered) {
            optionElement.classList.add('disabled');
            if (index === question.correct) {
                optionElement.classList.add('correct');
            }
            if (index === selectedOption) {
                optionElement.classList.add('selected');
            }
        } else {
            // Pergunta ainda não foi respondida, permitir seleção
            if (selectedOption === index) {
                optionElement.classList.add('selected');
            }
        }

        optionsContainer.appendChild(optionElement);
    });

    updateNavigationButtons();
}

function selectOption(optionIndex) {
    // Não permitir seleção se a pergunta já foi respondida
    if (isAnswered) return;

    selectedOption = optionIndex;

    const options = document.querySelectorAll('.option');
    options.forEach((option, index) => {
        option.classList.remove('selected');
        if (index === optionIndex) {
            option.classList.add('selected');
        }
    });

    updateNavigationButtons();
}

function confirmAnswer() {
    if (selectedOption === null || isAnswered) return;

    const question = questions[currentQuestionIndex];
    const isCorrect = selectedOption === question.correct;

    // Incrementar tentativas
    questionAttempts[currentQuestionIndex]++;
    totalAttempts++;
    currentAttempt = questionAttempts[currentQuestionIndex];
    document.getElementById('attemptCount').textContent = currentAttempt;

    const options = document.querySelectorAll('.option');

    if (isCorrect) {
        // Resposta correta
        userAnswers[currentQuestionIndex] = selectedOption;
        isAnswered = true;

        // Adicionar classe correct à opção selecionada
        options[selectedOption].classList.add('correct');

        // Mostrar feedback positivo
        showFeedback('Correto! Muito bem!', 'correct');

        // Desabilitar todas as opções
        options.forEach(option => {
            option.classList.add('disabled');
        });

    } else {
        // Resposta incorreta
        options[selectedOption].classList.add('incorrect');

        // Mostrar feedback negativo
        showFeedback('Resposta incorreta. Tente novamente!', 'incorrect');

        // Remover seleção após um tempo para permitir nova tentativa
        setTimeout(() => {
            options[selectedOption].classList.remove('incorrect', 'selected');
            selectedOption = null;
            hideFeedback();
            updateNavigationButtons();
        }, 2000);
    }

    updateNavigationButtons();
}

function showFeedback(message, type) {
    const feedbackElement = document.getElementById('feedbackMessage');
    feedbackElement.textContent = message;
    feedbackElement.className = `feedback-message ${type}`;
    feedbackElement.style.display = 'block';
}

function hideFeedback() {
    const feedbackElement = document.getElementById('feedbackMessage');
    feedbackElement.style.display = 'none';
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
        updateProgress();
    }
}

function previousQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion();
        updateProgress();
    }
}

function updateProgress() {
    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const confirmBtn = document.getElementById('confirmBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');

    // Botão anterior
    prevBtn.disabled = currentQuestionIndex === 0;

    // Botão confirmar
    confirmBtn.disabled = selectedOption === null || isAnswered;

    // Mostrar botão próxima apenas se a pergunta foi respondida
    if (isAnswered) {
        confirmBtn.style.display = 'none';

        if (currentQuestionIndex === questions.length - 1) {
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'inline-block';
        } else {
            nextBtn.style.display = 'inline-block';
            finishBtn.style.display = 'none';
        }
    } else {
        confirmBtn.style.display = 'inline-block';
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'none';
    }
}

function finishQuiz() {
    calculateScore();
    showResults();
}

function calculateScore() {
    score = userAnswers.length; // Número de perguntas respondidas corretamente
}

function showResults() {
    document.getElementById('questionCard').style.display = 'none';
    document.getElementById('resultCard').style.display = 'block';

    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('scorePercentage').textContent = percentage + '%';
    document.getElementById('correctAnswers').textContent = score;
    document.getElementById('wrongAnswers').textContent = questions.length - score;
    document.getElementById('totalAttempts').textContent = totalAttempts;

    let scoreText = '';
    if (percentage >= 90) {
        scoreText = 'Excelente! Você domina os padrões de projeto!';
    } else if (percentage >= 70) {
        scoreText = 'Muito bom! Você tem um bom conhecimento dos padrões.';
    } else if (percentage >= 50) {
        scoreText = 'Razoável. Continue estudando para melhorar!';
    } else {
        scoreText = 'Precisa estudar mais. Não desista!';
    }

    document.getElementById('scoreText').textContent = scoreText;
}

function restartQuiz() {
    document.getElementById('resultCard').style.display = 'none';
    document.getElementById('questionCard').style.display = 'block';
    initQuiz();
}

// Inicializar o quiz quando a página carregar
document.addEventListener('DOMContentLoaded', initQuiz);