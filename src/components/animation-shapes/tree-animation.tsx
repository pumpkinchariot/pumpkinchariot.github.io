import {useEffect} from "react";

interface TreeAnimation {
    scrollValue: number;
}

const TreeAnimation = (props: TreeAnimation) => {

    useEffect(() => {

    }, [props.scrollValue]);

    const generatedTree = () => {
        return (<>
            <div style={{
                borderTop: "5vw",
                height: "40vh",
                width: "8vw",
                backgroundColor: "white"
            }}>

            </div>
        </>);
    }

    return (
        <>
            {generatedTree()}
        </>
    );
}

export default TreeAnimation;