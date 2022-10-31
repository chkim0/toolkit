import { useState, forwardRef, useEffect, useImperativeHandle } from "react";
import { motion, AnimatePresence } from 'framer-motion';

const Popup = forwardRef((props, ref) => {

    const [Open, setOpen] = useState(false);
    useImperativeHandle(ref, () => {
        return {
            open: () => setOpen(true),
        };

    });

    useEffect(() => {
        Open ? (document.body.style.overflow = "hidden")
            : (document.body.style.overflow = "auto");
    }, [Open]);


    return (

        <AnimatePresence>
            {Open && (
                <motion.aside className="pop"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
                    exit={{ opacity: 0, scale: 0, transition: { duration: 0.5, delay: 0.5 } }}>
                    <motion.div
                        className="con"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: { duration: 0.5, delay: 1 } }}
                        exit={{ opacity: 0, transition: { delay: 0 } }}
                    >{props.children}</motion.div>
                    <motion.span
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { delay: 1.5 } }}
                        className="close"
                        onClick={() => setOpen(false)}>close</motion.span>
                </motion.aside>
            )}
        </AnimatePresence>


    );
});
export default Popup;


/*
forwardRef 
단계1 - 기존의 컴포넌트 함수를 popup이라는 컴포넌트 함수를 대입형(선언형을 대입형으로 전환해줘야한다)
단계2 - 해당 화살표함수를 forwordRef로 감쌈, 인수로 전달한다
단계 3 - 화살표함수(forwardRef로 전달되는) 두번째 인수로 ref추가
단계 4 - forwardRef안쪽에 useImperativeHandle 함수를 호출한다
단계 5 - 해당함수를 객체를 반환해서 해당 객체값을 부모 컴포넌트로 전달
단계 6 - 부모컴포넌트에 useRef로 forwardRef로 전달되는 자식 컴포넌트를 참조한다
단계 7 - 참조 객체는 useImperativeHandle이 리턴하는 객체를 지칭한다

*/