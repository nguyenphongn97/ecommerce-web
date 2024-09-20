import Image from "next/image";
import styles from "./page.module.css";
import { Button } from 'antd';

export default function Home() {
  return (
    <div>
      Hello world
      <div>
        <Button type="primary">Button</Button>
      </div>
    </div>
  );
}
