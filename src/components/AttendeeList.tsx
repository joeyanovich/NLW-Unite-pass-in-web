import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from "lucide-react"
import { IconButton } from "./IconButton"
import { Table } from "./table/Table"
import { TableHeader } from "./table/TableHeader"

export function AttendeeList() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-3 items-center">
        <h1 className="text-2xl font-bold">Participantes</h1>
        <div className="px-3 w-72 py-1.5 border border-white/10 rounded-lg  flex items-center gap-3">
          <Search className="size-4 text-emerald-300"/>
          <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" type="text" placeholder="Buscar participantes..."/>
        </div>
      </div>
      <Table>
        <thead>
          <tr className="border-b border-white/10">
            <TableHeader style={{ width: 48 }}>
              <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10 " name="" id="" />
            </TableHeader>
            <TableHeader>Código</TableHeader>
            <TableHeader>Participantes</TableHeader>
            <TableHeader>Data de inscrição</TableHeader>
            <TableHeader>Data do check-in</TableHeader>
            <TableHeader style={{ width: 64 }}></TableHeader>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 5 }).map((_, i) => {
            return (
              <tr key={i} className="border-b border-white/10 hover:bg-white/5">
              <td className="py-3 px-4 text-sm text-zinc-300">
                <input type="checkbox" className="size-4 bg-black/20 rounded border border-white/10" name="" id="" />
              </td>
              <td className="py-3 px-4 text-sm text-zinc-300">1321</td>
              <td className="py-3 px-4 text-sm text-zinc-300">
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">Nome</span>
                  <span>Email</span>
                </div>
              </td>
              <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
              <td className="py-3 px-4 text-sm text-zinc-300">3 dias atrás</td>
              <td className="py-3 px-4 text-sm text-zinc-300">
                <IconButton transparent>
                  <MoreHorizontal className="size-4"/>
                </IconButton>
              </td>
            </tr>
            )
          })}
        </tbody>
        <tfoot>
          <tr>
            <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>
              Mostrando 10 de 228 itens
            </td>
            <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
              <div className="inline-flex gap-8 items-center">
                <span>Página 1 de 23</span>
                <div className="flex gap-1.5">
                  <IconButton>
                    <ChevronsLeft className="size-4"/>
                  </IconButton>
                  <IconButton>
                    <ChevronLeft className="size-4"/>
                  </IconButton>
                  <IconButton>
                    <ChevronRight className="size-4"/>
                  </IconButton>
                  <IconButton>
                    <ChevronsRight className="size-4"/>
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