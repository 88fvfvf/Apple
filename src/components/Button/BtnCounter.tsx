import React from "react"
import { HiOutlineMinus } from "react-icons/hi"
import { LuPlus } from "react-icons/lu"
import { useAppDispatch } from "../../hooks/hooks"
import { getCart, minusCart } from "../../store/Cart/Cart.slice"
import './StyleButton.scss'

interface PropsCount {
    count: number
    id: number
}

const BtnCounter: React.FC<PropsCount> = ({ count,id }) => {
    const dispatch = useAppDispatch()

    const onClickPlus: () => void = () => {
        dispatch(getCart({
            id,
        }))
    }

    const onClickMinus = () => {
        dispatch(minusCart(id))
    }

    return (
        <div className="Cart__btn_counter">
            <span className="minus" onClick={() => onClickMinus()}>
                <HiOutlineMinus color="white"/>
            </span>
            <span>{count}</span>
            <span className="plus" onClick={() => onClickPlus()}>
                <LuPlus color="white"/>
            </span>
        </div>
    )
}

export default BtnCounter