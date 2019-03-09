#include<bits/stdc++.h>
using namespace std;

bool uset[100][100];
int n,m,sx,sy,zx,zy,maxstep=0;
int dx[4]={0,1,0,-1};
int dy[4]={1,0,-1,0};
int maze[100][100];

bool isinva(int x,int y){
	if(x<=0||x>n||y<=0||y>m){
		return true;
	}
	if(uset[x][y]){
		return true;
	}
	if(maze[x][y]==1){
		return true;
	}
	return false;
}

void dfs(int x,int y){
	if(x==zx&&y==zy){
		maxstep++;
		uset[zx][zy]=0;
		return;
	}
	for(int i=0;i<4;i++){
		int nx=x+dx[i];
		int ny=y+dy[i];
		if(isinva(nx,ny)){
			continue;
		}
		uset[nx][ny]=1;
		dfs(nx,ny); 	
	}
}
int main(){
	int t;
	scanf("%d%d%d",&n,&m,&t);
	scanf("%d%d%d%d",&sx,&sy,&zx,&zy);
	for(int i=0,xx,yy;i<t;i++){
		scanf("%d%d",&xx,&yy);
		maze[xx][yy]=1;
	}
	dfs(sx,sy);
	printf("%d",maxstep);
}
