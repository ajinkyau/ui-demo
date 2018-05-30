import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'topic'
})
export class TopicPipe implements PipeTransform {

    transform(topic: String, index, topics) {
        return topic + (index !== topics.length - 1 ? ', ' : '');
    }
}