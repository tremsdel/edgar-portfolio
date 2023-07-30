import "../../App.css";
import DownloadIcon from "@mui/icons-material/Download";
// import LearningCode from "../../assets/images/learn-coding-clipart.svg";
// import * as LottiePlayer from "@lottiefiles/lottie-player";

export default function About() {
  // const getDate = () => {
  //   var dob = new Date("05/23/1994");
  //   var month_diff = Date.now() - dob.getTime();
  //   var age_dt = new Date(month_diff);
  //   var year = age_dt.getUTCFullYear();
  //   var age = Math.abs(year - 1970);
  //   return age;
  // };
  return (
    <div
      id="about"
      className="min-h-screen bg-white flex flex-col text-center gap-5 text-black text-lg  font-normal"
    >
      <div className="head text-5xl mt-12 font-bold" data-aos={"slide-down"}>
        About Me
      </div>
      <div className="flex flex-row  gap-6 ml-8">
        <div className="flex-col mt-14 flex flex-auto w-64 gap-6">
          <h3 className="text-3xl font-medium" data-aos={"fade-left"}>
            I'm <span className="text-yellow-600">Edgar Andrade,</span> a Web
            Enthusiast
          </h3>
          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            A passionate Web Developer specialized in JavaScript and ReactJS.
            With a focus on creating interactive websites, I continuously
            optimize and troubleshoot to deliver exceptional user experiences.
          </p>

          <h3 className="text-2xl font-medium" data-aos={"fade-left"}>
            🔥 Passion for Learning:
          </h3>

          <p
            className="pt-5 leading-7 text-slate-900 text-justify"
            data-aos={"fade-left"}
          >
            As an experienced developer, I have a strong drive for continuous
            growth. I stay up-to-date with the latest industry trends and best
            practices, constantly seeking opportunities for professional
            development.
          </p>
        </div>

        <div
          class="relative flex-auto w-32   sm:rounded-lg  pl-4"
          data-aos={"slide-left"}
        >
          {/* <img
            src={LearningCode}
            alt="Learning Code"
            className="motion-safe:animate-zoomy"
          /> */}
          <div className="motion-safe:animate-zoomy">
            <lottie-player
              autoplay
              loop
              mode="bounce"
              src="https://assets10.lottiefiles.com/packages/lf20_w98qte06.json"
              style={{ width: "350px" }}
            />
          </div>
          <button className="py-3 mt-5 text-white mx-auto px-9 bg-blue-600 border-2 w-fit border-blue-500 rounded-3xl  hover:-translate-y-1.5 duration-[350ms] hover:duration-[350ms] hover:bg-blue-800 hover:scale-[1.023] focus:bg-blue-800 animate-zoomy">
            <a
              href={require("../../assets/files/Edgar's Resume.pdf")}
              download={"Edgar's Resume.pdf"}
            >
              Download CV
              <DownloadIcon />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
