import type { NextPage } from "next";
import dynamic from "next/dynamic";

const Microfrontend = dynamic(() => import("react-mfe/App"), {
  ssr: false,
  loading: () => (
    <div
      style={{
        width: "100%",
        height: "250px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #17111c",
        boxSizing: "border-box",
        borderRadius: "20px",
      }}
    >
      Loading microfrontend from remote...
    </div>
  ),
});

const Home: NextPage = () => (
  <div
    style={{
      width: "70%",
      margin: "auto",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    }}
  >
    <div
      style={{
        width: "100%",
        height: "250px",
        borderRadius: "20px",
        padding: "20px",
        boxSizing: "border-box",
        backgroundColor: "#a1d940",
        color: "#17111c",
      }}
    >
      Local to the host NextJS App
    </div>
    <Microfrontend />
  </div>
);

export default Home;
