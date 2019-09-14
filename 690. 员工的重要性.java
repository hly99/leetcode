class Solution {
    public int getImportance(List<Employee> employees, int id) {
        int res = 0;
        //装入hashMap
        HashMap<Integer, Employee> map = new HashMap<>();
        for (Employee item : employees)
            map.put(item.id, item);
        //广度优选遍历的辅助队列
        PriorityQueue<Integer> queue = new PriorityQueue<>();
        queue.add(id);
        while (!queue.isEmpty()) {
            Integer poll = queue.poll();
            Employee item = map.get(poll);
            res += item.importance;
            for (Integer sub : item.subordinates)
                queue.add(sub);
        }
        return res;
    }
}
