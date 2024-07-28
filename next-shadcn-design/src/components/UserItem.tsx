export default function UserItem() {
    return <div className="flex items-center justify-between gap-2 border border-[red] rounded-[10px] p-2">
        <div className="avatar rounded-full min-h-10 min-w-10 bg-emerald-500 text-white font-[700] flex items-center justify-center">
            <p>CT</p>
        </div>
        <div className="grow">
            <p className="text-[16px] font-bold">Charles Tanev</p>
            <p className="text-[12px] text-nautral-500">somemail@lorem.com</p>
        </div>
    </div>
};
