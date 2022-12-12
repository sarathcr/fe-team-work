import Sidebar from "../../components/sidebar";
import styles from "./index.module.scss";
export interface DashboardLayoutProps {
  children: JSX.Element;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className={styles.dashboardLayout}>
      <Sidebar />
      <div className={styles.dashboardLayoutContent}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
