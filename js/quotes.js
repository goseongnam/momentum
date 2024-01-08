const quotes = [
    {
      quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
      author: "파울로 코엘료",
    },
    {
      quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
      author: "엘버트 허버드",
    },
    {
      quote:"피할수 없으면 즐겨라.",
      author: "로버트 엘리엇",
    },
    {
      quote: "먼저 자신을 비웃어라. 다른 사람이 당신을 비웃기 전에.",
      author: "엘사 맥스웰",
    },
    {
      quote: "한번의 실패와 영원한 실패를 혼동하지 마라.",
      author: "F.스콧 핏제랄드",
    },
    {
      quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
      author: "앙드레 말로",
    },
    {
      quote: "행복은 습관이다,그것을 몸에 지니라.",
      author: "허버드",
    },
    {
      quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
      author: "톰 모나건",
    },
    {
      quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
      author: "찰스다윈",
    },
    {
      quote: "평생 살 것처럼 꿈을 꾸어라.그리고 내일 죽을 것처럼 오늘을 살아라.",
      author: "제임스 딘",
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;