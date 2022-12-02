import Image from "next/image";
import styles from "./index.module.scss";
import Logo from "../../public/assets/login/seidor_logo.png";
import router from "next/router";

export interface AuthLayoutProps {
  children?: JSX.Element;
  title?: string;
  description?: string;
  buttonText?: string;
  routelink?: string;
}

const AuthLayout = ({ children, title, description, buttonText, routelink }: AuthLayoutProps) => {
  return (
    <div className={`${styles.auth} h-full relative w-full`}>
      <div className="w-full flex h-full gap-0">
        <div className={`bg-secondary w-2/3 hidden h-full md:flex items-center grow justify-center ${styles.auth__section_left}`}>
          <header className={`p-10 fixed left-0 top-0`}>
            <figure className="w-23">
              <Image src={Logo} alt={"logo"} />
            </figure>
          </header>
          <div className={`${styles.auth__content} p-[40px] max-w-xl mx-auto rounded-lg shadow-xl`}>
            <h2 className="text-xl mb-2 font-extrabold">{title}</h2>
            <p className="text-md mb-3 font-extrabold">{description}</p>
            {buttonText && (
              <button
                onClick={() => router.push(`${routelink}`)}
                className="bg-white px-6 py-2 rounded-xl text-white font-bold hover:bg-teritiary shadow-xl transition duration-300 hover:duration-300 ease-in-out btn"
              >
                {buttonText}
              </button>
            )}
          </div>
        </div>
        <div className="h-full w-full sm:w-[500px] sm:mx-auto md:w-1/3 flex flex-col align-center justify-center text-center px-6 lg:px-16 py-1">
          <figure className="mx-auto mb-8 md:hidden">
            <Image src={Logo} alt={"logo"} />
          </figure>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
