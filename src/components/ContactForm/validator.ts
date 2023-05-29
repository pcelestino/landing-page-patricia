import { z } from "zod";

const schema = z.object({
  name: z.string().nonempty("O nome é obrigatório"),
  email: z
    .string()
    .email("O email deve ser válido")
    .nonempty("O email é obrigatório"),
  phone: z.string().optional(),
});

export type FieldValues = z.infer<typeof schema>;

export default schema;
