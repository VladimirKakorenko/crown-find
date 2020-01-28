import { ProjectBonus } from './project-bonus.model';
import { ProjectPost } from './project-post.model';

export class Project {
  constructor(
    public name: string,
    public cash: number,
    public description: string,
    public imageUrl: string,
    public videoUrl: string,
    public expirationDate: string,
    public tags: string[],
    public bonuses: ProjectBonus[],
    public posts: ProjectPost[],
  ) {
  }
}
