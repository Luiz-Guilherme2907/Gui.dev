import 'server-only'
import { z } from 'zod'
import { createSupabaseServerClient } from '@/lib/supabase/server'

const ContactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto.').max(100).trim(),
  email: z.string().email('E-mail inválido.').max(255).toLowerCase().trim(),
  message: z.string().min(10, 'Mensagem muito curta.').max(2000).trim(),
  budget: z.string().optional(),
})

export type ContactFormState = {
  success?: boolean
  errors?: Partial<Record<keyof z.infer<typeof ContactSchema>, string[]>>
  message?: string
}

export async function insertContactRequest(
  rawData: unknown
): Promise<ContactFormState> {
  const parsed = ContactSchema.safeParse(rawData)

  if (!parsed.success) {
    return { errors: parsed.error.flatten().fieldErrors }
  }

  const supabase = createSupabaseServerClient()

  const { error } = await supabase.from('contact_requests').insert({
    name: parsed.data.name,
    email: parsed.data.email,
    message: parsed.data.message,
    budget: parsed.data.budget ?? null,
  })

  if (error) {
    // Regista o erro no servidor mas nunca expõe detalhes da BD ao cliente
    console.error('[contact DAL] insert error:', error.message)
    return { message: 'Erro interno. Por favor, tenta novamente mais tarde.' }
  }

  return { success: true }
}
