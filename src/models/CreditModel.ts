import { Cast, Credit, Crew } from 'tmdb/types';

export class CreditModel {
  id: number;
  cast: Array<CastModel>;
  crew: Array<CrewModel>;

  constructor(data: Credit | null) {
    this.id = data?.id ?? 0;
    this.cast = data?.cast?.map((x) => new CastModel(x)) ?? [];
    this.crew = data?.crew?.map((x) => new CrewModel(x)) ?? [];
  }

  get mainCastNames(): string[] {
    if (this.cast.length <= 0) return [];

    return this.cast.slice(0, 3).map((cast) => cast.name);
  }

  get castNames(): string[] {
    if (this.cast.length <= 0) return [];

    return this.cast.slice(0, 10).map((cast) => cast.name);
  }

  get directorName(): string {
    return this.crew.find((c) => c.job === 'Director')?.name ?? '';
  }

  get writerName(): string {
    return this.crew.find((c) => c.job === 'Writer')?.name ?? '';
  }
}

export class CastModel {
  gender: number | null;
  id: number;
  name: string;
  originalName: string;
  character: string;

  constructor(data: Cast | null) {
    this.id = data?.id ?? 0;
    this.gender = data?.gender ?? null;
    this.name = data?.name ?? '';
    this.originalName = data?.original_name ?? '';
    this.character = data?.character ?? '';
  }
}

export class CrewModel {
  gender: number | null;
  id: number;
  name: string;
  originalName: string;
  department: string;
  job: string;

  constructor(data: Crew | null) {
    this.id = data?.id ?? 0;
    this.gender = data?.gender ?? null;
    this.name = data?.name ?? '';
    this.originalName = data?.original_name ?? '';
    this.department = data?.department ?? '';
    this.job = data?.job ?? '';
  }
}
