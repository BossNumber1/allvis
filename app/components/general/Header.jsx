import headerStyles from "../../styles/header.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
    const router = useRouter();

    return (
        <header className={headerStyles.commonBlock}>
            <div className={headerStyles.nameBrand}>Ustinov Corp.</div>
            <div className={headerStyles.centerBlock}>
                <div
                    className={
                        router.pathname == "/order"
                            ? `${headerStyles.activeLink}`
                            : "nav-item dropdown hovered"
                    }
                >
                    <Link href="/order">
                        <a className="nav-link" style={{ fontWeight: 500 }}>
                            Заказать
                        </a>
                    </Link>
                </div>
                <div
                    className={
                        router.pathname == "/about"
                            ? `${headerStyles.activeLink}`
                            : "nav-item dropdown hovered"
                    }
                >
                    <Link href="/about">
                        <a
                            className="nav-link"
                            style={{
                                fontWeight: 500,
                                minWidth: 100,
                                textAlign: "center",
                            }}
                        >
                            О нас
                        </a>
                    </Link>
                </div>
                <div
                    className={
                        router.pathname == "/details"
                            ? `${headerStyles.activeLink}`
                            : "nav-item dropdown hovered"
                    }
                >
                    <Link href="/details">
                        <a className="nav-link" style={{ fontWeight: 500 }}>
                            Подробности
                        </a>
                    </Link>
                </div>
            </div>
            <div className={headerStyles.rightBlock}>
                <div
                    className={
                        router.pathname == "/"
                            ? `${headerStyles.activeLink}`
                            : "nav-item dropdown hovered"
                    }
                >
                    <Link href="/">
                        <a className="nav-link" style={{ fontWeight: 500 }}>
                            Главная
                        </a>
                    </Link>
                </div>
            </div>
        </header>
    );
}
