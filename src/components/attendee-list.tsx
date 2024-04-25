import { FaSearch } from "react-icons/fa";
import { IoEllipsisHorizontal } from "react-icons/io5";
import {
    MdOutlineKeyboardDoubleArrowLeft,
    MdKeyboardArrowLeft,
    MdOutlineKeyboardArrowRight,
    MdOutlineKeyboardDoubleArrowRight
} from "react-icons/md";
import { IconButton } from "./icon-button";
import { Table } from "./table/table";

export function AttendeeList() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex gap-3 items-center">
                <h1 className="text2xl font-bold">Participantes</h1>
                <div className="px-3 py-1.5 border border-white/10 rounded-lg text-sm w-72 flex items-center gap-3">
                    <FaSearch className="text-emerald-300" />

                    <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participante..." />
                </div>
            </div>
            <Table>
                <thead>
                    <tr className="border-b border-white/10">
                        <th style={{ width: 48 }} className="py-3 px-4 tex-sm font-semibold text-left">
                            <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 " />
                        </th>
                        <th className="py-3 px-4 tex-sm font-semibold text-left">Código</th>
                        <th className="py-3 px-4 tex-sm font-semibold text-left">Participante</th>
                        <th className="py-3 px-4 tex-sm font-semibold text-left">Data de inscrição</th>
                        <th className="py-3 px-4 tex-sm font-semibold text-left">Data do check-in</th>
                        <th style={{ width: 64 }} className="py-3 px-4 tex-sm font-semibold text-left"></th>
                    </tr>
                </thead>
                <tbody>
                    {Array.from({ length: 10 }).map((_, i) => {
                        return (
                            <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                                <td className="py-3 px-4 tex-sm text-zinc-300">
                                    <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" />
                                </td>
                                <td className="py-3 px-4 tex-sm text-zinc-300">1234</td>
                                <td className="py-3 px-4 tex-sm text-zinc-300">
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white">Gabriel Pedroso de Almeida</span>
                                        <span>gbpedroso.22@gmail.com</span>
                                    </div>
                                </td>
                                <td className="py-3 px-4 tex-sm text-zinc-300">7 dias atrás</td>
                                <td className="py-3 px-4 tex-sm text-zinc-300">3 dias atrás</td>
                                <td className="py-3 px-4 tex-sm text-zinc-300">
                                    <IconButton transparent>
                                        <IoEllipsisHorizontal className="text-xl" />
                                    </IconButton>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td className="py-3 px-4 tex-sm text-zinc-300" colSpan={3}>
                            Mostrando 10 de 228 itens
                        </td>
                        <td className="py-3 px-4 tex-sm text-zinc-300 text-right" colSpan={3}>
                            <div className="inline-flex items-center gap-8">
                                <span>Página 1 de 23</span>

                                <div className="flex gap-1.5">
                                    <IconButton>
                                        <MdOutlineKeyboardDoubleArrowLeft className="text-xl" />
                                    </IconButton>
                                    <IconButton>
                                        <MdKeyboardArrowLeft className="text-xl" />
                                    </IconButton>
                                    <IconButton>
                                        <MdOutlineKeyboardArrowRight className="text-xl" />
                                    </IconButton>
                                    <IconButton>
                                        <MdOutlineKeyboardDoubleArrowRight className="text-xl" />
                                    </IconButton>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}