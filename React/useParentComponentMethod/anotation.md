## взаимодействие дочернего и родительского компонента

меняем заголовок родителя в зависимости от того на каком
ребенке нажата кнопка

на активном компоненте обращаемся к свойству компонента - родителя? которое в свою очередь использует
описанный в родительском компоненте метод и меняет стейт родителя

**важно!**

стейт всегда где то на родителе/ активный компонент как правило всего оишь отображает
состояние родителя

**важно!**

обращение к методу родительского компонента через байнд!
можно и через стрелочную функцию но! тогда компонент рендериться заново
и это потеря производительности