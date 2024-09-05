
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import apiInventory from "@/services/entrena-inventory-api";
import { useQuery } from "@tanstack/react-query";
import { LuPlus } from "react-icons/lu";
import { Button } from "../../components/ui/button";
import type { IProduct } from "@/services/entrena-inventory-api/types";

export default function Products() {
  const { data: productData } = useQuery({
    queryKey: ["apiInventory.getProducts"],
    queryFn: async () => {
      const response = await apiInventory.getProducts()
      console.log(response.result);
      return response.result;
    },
  });

  return (
      // <div className=" mx-auto max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl px-4 transition-all duration-500 ease-in-out">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="text-center">Nome</TableHead>
              {/* <TableHead className="text-center">ID</TableHead> */}
              <TableHead className="text-center">Descrição</TableHead>
              <TableHead className="text-center">Preço</TableHead>
              <TableHead className="text-center">Quantidade</TableHead>
              <TableHead className="w-20 text-center">Categoria</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
        {productData?.map((product: IProduct) => (
          <TableRow className="text-center" key={product?.id}>
            <TableCell>{product?.name}</TableCell> 
                {/* <TableCell>{employee?.id}</TableCell> */}
                <TableCell>{product?.description}</TableCell>
                <TableCell>{product?.price}</TableCell>
                <TableCell>{product?.quantity}</TableCell>
                <TableCell>{product?.categoryId}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      // </div>
  );
}
