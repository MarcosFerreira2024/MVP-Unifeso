import { Content } from "../value objects/Content";
import { RatingValue } from "../value objects/RatingValue";

class Rating {
  private constructor(private rating: RatingValue, private content?: Content) {}

  static create(rating: number, content?: string) {
    return new Rating(RatingValue.create(rating), Content.create(content));
  }

  getVo() {
    return {
      content: this.content ?? null,
      rating: this.rating,
    };
  }

  getDto() {
    return {
      rating: this.rating.getValue(),
      content: this.content?.getContent() ?? null,
    };
  }
}

export { Rating };
