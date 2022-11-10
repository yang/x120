import * as React from "react";
import { PlasmicButton2 } from "./plasmic/razorpay_payment_gateway/PlasmicButton2";

function Button2_(props, ref) {
  const { plasmicProps } = PlasmicButton2.useBehavior(props, ref);
  const clickedBtn = () => { 
    console.log("first")
  }
  return <PlasmicButton2 onClick = {clickedBtn} {...plasmicProps} />;
}

const Button2 = React.forwardRef(Button2_);

export default Object.assign(Button2, {
  __plumeType: "button"
});
