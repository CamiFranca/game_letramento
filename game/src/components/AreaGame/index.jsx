import { useState, useEffect } from "react"
import { EnumType } from "../../common/Enum/EnumType"
import { Modal } from "../modal/index"
import "./Style.css"

export const AreaGame = () => {
    const [icons, setIcons] = useState([])
    const [timer, setTimer] = useState(40)
    const [isGameStarted, setIsGameStarted] = useState(false)
    const [baskets, setBaskets] = useState({
        file: [],
        folder: [],
        program: [],
    });
    const [gameOver, setGameOver] = useState(false);
    const [message, setMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        createListIcons()
    }, [])

    const createListIcons = () => {
        const allIcons = [
            ...EnumType.file,
            ...EnumType.folder,
            ...EnumType.program,
        ];

        const randomIcons = allIcons.sort(() => Math.random() - 0.5).slice(0, 12)

        const preparedIcons = randomIcons.map((icon, index) => ({
            id: index + 1,
            type: icon.type,
            icon,
        }))

        setIcons(preparedIcons);
    };

    const handleDragStart = (e, icon) => {
        e.dataTransfer.setData("iconId", icon.id)
    }

    const handleDrop = (e, targetType) => {
        const iconId = parseInt(e.dataTransfer.getData("iconId"), 10)
        const draggedIcon = icons.find((icon) => icon.id === iconId)

        if (draggedIcon) {
            setBaskets((prevBaskets) => ({
                ...prevBaskets,
                [targetType]: [...prevBaskets[targetType], draggedIcon],
            }));

            setIcons((prevIcons) => prevIcons.filter((icon) => icon.id !== iconId))
        }

        e.preventDefault()
    };

    const handleDragOver = (e) => {
        e.preventDefault()
    };

    const checkGameResult = () => {
      
        const hasIcons = Object.values(baskets).some((basket) => basket.length > 0)

        if (!hasIcons) {
            setMessage("Nenhum ícone foi colocado nas cestas. Tente novamente!")
        } else {
         
            let isCorrect = true

            Object.keys(baskets).forEach((key) => {
                baskets[key].forEach((icon) => {
                    if (icon.type !== key) {
                        isCorrect = false
                    }
                });
            });

            setMessage(
                isCorrect
                    ? "Bom trabalho! Todos os ícones estão no lugar certo. O código da sua atividade é 12345."
                    : "Ops! Alguns ícones estão fora de lugar. O código da sua atividade é 67890."
            );
        }

        setGameOver(true)
        setIsModalOpen(true)
    };

    const startGame = () => {
        setGameOver(false)
        setMessage("")
        setIsModalOpen(false);
        setBaskets({ file: [], folder: [], program: [] })
        setTimer(40)
        setIsGameStarted(true); 
        createListIcons()
    };

    useEffect(() => {
        if (timer > 0 && isGameStarted && !gameOver) {
            const interval = setInterval(() => {
                setTimer((prev) => prev - 1)
            }, 1000)

            return () => clearInterval(interval)
        } else if (timer === 0 && isGameStarted) {
            setMessage(
                "O tempo acabou! O código da sua atividade é 67890."
            );
            setIsModalOpen(true)
            setGameOver(true)
        }
    }, [timer, isGameStarted, gameOver]);

    return (
        <div className="workArea">
            <header className="controls">
                <div className="timer">Tempo: {timer}s</div>
                <button onClick={startGame}>Iniciar</button>
                <button onClick={checkGameResult} disabled={!isGameStarted || gameOver}>
                    Verificar
                </button>
            </header>

            <main className="baskets">
                {["file", "folder", "program"].map((type) => (
                    <section
                        key={type}
                        className="basket"
                        onDrop={(e) => handleDrop(e, type)}
                        onDragOver={handleDragOver}
                    >
                        <h2>{type === "file" ? "Arquivo" : type === "folder" ? "Pasta" : "Programa"}</h2>
                        <article className="basketIcons">
                            {baskets[type].map((icon, index) => (
                                <div key={index} className="icon">{icon.icon.icon}</div>
                            ))}
                        </article>
                    </section>
                ))}
            </main>

            <aside className="boxIcons">
                {icons.map((icon) => (
                    <div
                        key={icon.id}
                        className="iconContainer"
                        draggable
                        onDragStart={(e) => handleDragStart(e, icon)}
                    >
                        <div className="icon">{icon.icon.icon}</div>
                    </div>
                ))}
            </aside>

            {isModalOpen && (
                <Modal
                    message={message}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
};