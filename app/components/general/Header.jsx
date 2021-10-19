import headerStyles from "../../styles/header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();

    return (
        <div className={headerStyles.commonBlock}>
            <div>Ustinov Corp.</div>
            <div className={headerStyles.centerBlock}>
                <div
                    className={
                        router.pathname == "/contacts"
                            ? `${headerStyles.activeLink}`
                            : ""
                    }
                >
                    <Link href="/contacts">
                        <a>Контакты</a>
                    </Link>
                </div>
                <div
                    className={
                        router.pathname == "/about"
                            ? `${headerStyles.activeLink}`
                            : ""
                    }
                >
                    <Link href="/about">
                        <a>О нас</a>
                    </Link>
                </div>
                <div
                    className={
                        router.pathname == "/details"
                            ? `${headerStyles.activeLink}`
                            : ""
                    }
                >
                    <Link href="/details">
                        <a>Подробности</a>
                    </Link>
                </div>
            </div>
            <div className={headerStyles.rightBlock}>
                <div
                    className={
                        router.pathname == "/"
                            ? `${headerStyles.activeLink}`
                            : ""
                    }
                >
                    <Link href="/">
                        <a>На главную</a>
                    </Link>
                </div>
            </div>
        </div>
    );
}
