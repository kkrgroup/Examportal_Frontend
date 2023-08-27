import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css'],
})
export class AddQuizComponent implements OnInit {
  categories = [
    {
      cid: 20,
      title: 'Programming',
    },
    {
      cid: 20,
      title: 'Programming',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
