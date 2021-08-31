import { JobModel } from "./job.model";
import { SocialMediaModel } from "./social-media.model";

export class HomeModel {
  about_text!: string;
  social_media!: SocialMediaModel[];
  home_title!: string;
  home_text!: string;
  portfolio_jobs!: JobModel[];
}
