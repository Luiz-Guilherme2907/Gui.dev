import 'server-only'
import { z } from 'zod'
import { createSupabaseServerClient } from '@/lib/supabase/server'

const ContactSchema = z.object({
  name: z.string().min(2, 'Nome muito curto.').max(100).trim(),
  contact: z.string().min(5, 'Contato muito curto.').max(255).trim(),
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
    return { errors: parsed.error.flatten((i) => i.message).fieldErrors }
  }

  const supabase = createSupabaseServerClient()

  const { error } = await supabase.from('contact_requests').insert({
    name: parsed.data.name,
    contact: parsed.data.contact,
    message: parsed.data.message,
    budget: parsed.data.budget ?? null,
  })

  if (error) {
    console.error('[contact DAL] insert error:', error.message)
    return { message: 'Erro interno. Por favor, tenta novamente mais tarde.' }
  }

  return { success: true }
}
