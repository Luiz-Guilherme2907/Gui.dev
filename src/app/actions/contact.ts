'use server'

import { insertContactRequest, type ContactFormState } from '@/data/contact'

// Assinatura compatível com useActionState: recebe prevState e formData
export async function submitContactAction(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  return insertContactRequest({
    name: formData.get('name'),
    contact: formData.get('contact'),
    message: formData.get('message'),
    budget: formData.get('budget'),
  })
}
