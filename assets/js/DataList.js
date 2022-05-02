const dataArticle = [
  {
    id: 1,
    imageUrl: "assets/images/sub-hero-article-1.jpg",
    name: "Crypto in Chaos, but Blockchain-powered Pay and Stablecoins",
    className: "img-responsive rounded mr-20",
  },
  {
    id: 2,
    imageUrl: "assets/images/sub-hero-article-2.jpg",
    name: "Dogecoin 2.0 Revealed: Revelations From A Big, Anonymous Investor",
    className: "img-responsive rounded mr-20",
  },
  {
    id: 3,
    imageUrl: "assets/images/sub-hero-article-1.jpg",
    name: "What Are Salvadorans Doing with their USD 30 Bitcoin Giveaways?",
    className: "img-responsive rounded mr-20",
  },
].map((b) => {
  const columnFour = document.createElement("div");
  const subArticleLink = document.createElement("a");
  const figureTag = document.createElement("figure");
  const imageContent = document.createElement("img");
  const figureCaption = document.createElement("figcaption");

  columnFour.className = "col-4 flex items-center justify-start bg";

  subArticleLink.href = "/#";
  subArticleLink.className = "no-underline hover:underline";

  figureTag.className = "flex items-center";

  imageContent.src = b.imageUrl;
  imageContent.className = b.className;
  imageContent.alt = "Content Article";

  figureCaption.className = "text-white text-left w-240";
  figureCaption.innerText = b.name;

  figureTag.append(imageContent, figureCaption);
  subArticleLink.appendChild(figureTag);
  columnFour.appendChild(subArticleLink);

  document.getElementById("sub-content").append(columnFour);
});

const dataNewsCategories = [
  { id: 1, name: "Bicoin News" },
  { id: 2, name: "Ethereum News" },
  { id: 3, name: "NFTs News" },
  { id: 4, name: "DeFi News" },
  { id: 5, name: "Altcoin News" },
  { id: 6, name: "Blockhain News" },
  { id: 7, name: "Confirmation" },
  { id: 8, name: "Press Release" },
  { id: 9, name: "Sponsored News" },
  { id: 10, name: "Cryptonews Deals" },
  { id: 11, name: "Industry Talk" },
  { id: 12, name: "Trading Talks" },
  { id: 13, name: "Cryptocurreny" },
  { id: 14, name: "Marketplafe" },
  { id: 15, name: "Trading Tools" },
  { id: 16, name: "Security Tools" },
];