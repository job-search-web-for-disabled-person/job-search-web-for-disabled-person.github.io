const Private = () => {
    return (
        <>
            <label className="px-2 font-semibold hover:cursor-pointer">이력서 공개 여부</label>
            <input
                class="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 
                before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] 
                after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 
                after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] 
                checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 
                checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] 
                checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] 
                hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] 
                focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                checked:focus:before:ml-[1.0625rem] checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] 
                checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]"
                type="checkbox"
                role="switch"
                id="Switch"
                onChange={console.log("click")}
                />
            {/* <label
                class="inline-block pl-[0.15rem] hover:cursor-pointer"
                for="Switch">
                    {value}
            </label> */}
        </>
    );
  };
  
  export default Private;
