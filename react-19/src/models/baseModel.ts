/**
 * Represents a base model with conditional field requirements.
 *
 * This type has two variants:
 *
 * 1. If `id` is defined, `createdAt` must also be defined, while `updatedAt`
 *    and `deletedAt` remain optional.
 *
 *    Example:
 *    {
 *      id: "123",
 *      createdAt: "2024-12-29T12:34:56Z",
 *      updatedAt?: "2024-12-30T08:45:00Z",
 *      deletedAt?: "2024-12-31T15:00:00Z"
 *    }
 *
 * 2. If `id` is not defined, all fields (`id`, `createdAt`, `updatedAt`, and `deletedAt`)
 *    are optional.
 *
 *    Example:
 *    {
 *      id?: undefined,
 *      createdAt?: undefined,
 *      updatedAt?: string,
 *      deletedAt?: string
 *    }
 *
 * This ensures that `id` and `createdAt` are either both defined or both undefined,
 * providing consistent field relationships in the model.
 */

interface BaseModelWithId {
  id: string;
  createdAt: string;
  updatedAt?: string;
  deletedAt?: string;
}

interface BaseModelWithoutId {
  id?: undefined;
  createdAt?: undefined;
  updatedAt?: string;
  deletedAt?: string;
}

type BaseModel = BaseModelWithId | BaseModelWithoutId;

export type { BaseModel };
