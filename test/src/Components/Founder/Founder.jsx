// @ts-ignore
import second from '../../assets/Pawan-panjabi-e1724242619180.jpg'
// @ts-ignore
import ManOnAHand from '../../assets/belief_13415549.png'
export default function Founder() {
  return (
    <section className="flex flex-col items-center p-16 bg-white space-y-8 lg:h-dvh">
    <div
          className="w-24 h-24 bg-orange-500"
          style={{
            maskImage: `url(${ManOnAHand})`,
            WebkitMaskImage: `url(${ManOnAHand})`,
            maskSize: "contain",
            WebkitMaskSize: "contain",
            maskPosition: "center",
            WebkitMaskPosition: "center",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
          }}
        ></div>
    <h2 className="text-3xl md:text-4xl font-bold text-black">Meet Our Founder</h2>
    <img src={second} alt="Mr. Pawan Punjabi" className="rounded-lg w-80 h-96 max-md:w-80 object-cover" />
    <div className="text-center border-b-4 border-orange-400 p-3 rounded-xl w-52 max-md:w-72">
    <h3 className=" text-lg font-bold text-primary">Mr. Pawan Punjabi</h3>
    <p className="text-zinc-500">Founder</p>
    </div>
  </section>
  )
}
