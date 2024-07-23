// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const KmsKeysSchema = z.object({
  id: z.string().uuid(),
  description: z.string().nullable().optional(),
  isDisabled: z.boolean().default(false).nullable().optional(),
  isReserved: z.boolean().default(true).nullable().optional(),
  orgId: z.string().uuid(),
  slug: z.string(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TKmsKeys = z.infer<typeof KmsKeysSchema>;
export type TKmsKeysInsert = Omit<z.input<typeof KmsKeysSchema>, TImmutableDBKeys>;
export type TKmsKeysUpdate = Partial<Omit<z.input<typeof KmsKeysSchema>, TImmutableDBKeys>>;
