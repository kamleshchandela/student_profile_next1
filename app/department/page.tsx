import Image from "next/image";


function Student() {
    const arr = [1, 2, 3, 4, 5, 6, 7]

    return (
        <>
            <div className="w-[100vw] border h-[10vw] ">
                <div className="w-[100%] text-[2vw] pl-[10vw] mt-[2vw] flex items-center font-bold h-[30%] ">
                    Departments
                </div>
                <div className="w-[100%] text-[1vw] pl-[10vw] flex items-center text-gray-700 h-[25%] ">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>





            </div>


            <div className="w-[100vw] border gap-[2vw] p-[2vw] pl-[10vw] flex-wrap">
                {
                    arr.map((e) => {
                        return (
                            <div key={e} className="w-[90%] h-[12vw] pt-[1vw] border">
                                <div className="w-[100%] h-[30%]  flex gap-[1vw] pl-[2vw] items-center  ">
                                    <Image src={"/earthlogo.png"} alt="Earth Logo" className="w-[4%] border h-[100%] p-[0.5vw] bg-blue-200 rounded-[1vw]" width={300} height={300} />
                                    <div className="text-[1.5vw] font-bold">
                                        Computer Science
                                    </div>
                                </div>
                                <div className="w-[100%] h-[30%] flex  ">
                                    <p className="w-[80%] pl-[2.5vw] h-[100%] text-[1.3vw] flex text-gray-500 font-border items-center">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolorem aliquam aspernatur illo?
                                    </p>
                                    <p className="w-[20%] h-[100%]  text-[1.3vw] flex font-bold justify-center text-blue-500 font-border items-center">
                                        {"View >"}
                                    </p>
                                </div>
                                <div className="w-[100%] h-[30%] flex  ">
                                    <div className="w-[20%] flex justify-center gap-[1vw] items-center h-[100%] ">
                                        <Image src={"/earthlogo.png"} alt="Earth Logo" className="w-[10%] border h-[50%] rounded-[1vw]" width={300} height={300} />
                                        <p>
                                            4 spacialization
                                        </p>
                                    </div>
                                    <div className="w-[20%] flex justify-center gap-[1vw] items-center h-[100%] ">
                                        <Image src={"/earthlogo.png"} alt="Earth Logo" className="w-[10%] border h-[50%] rounded-[1vw]" width={300} height={300} />
                                        <p>
                                            181 Enrolled Students
                                        </p>
                                    </div>


                                </div>
                            </div>
                        )
                    })
                }

            </div>






        </>
    )
}


export default Student; 